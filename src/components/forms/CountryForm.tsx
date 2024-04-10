"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import {
  handleCreateCountry,
  handleCreateCurrency,
  handleCreateDenomination,
} from "@/server/actions"
import { Currency } from "@prisma/client"
import { Select } from "antd"
import CustomSelectInput from "../customSelectInput/CustomSelectInput"
import { useFormStatus } from "react-dom"
type Props = {
  currencies: Currency[]
}

const CountryForm = ({ currencies }: Props) => {
  const { pending } = useFormStatus()
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),

    code: Yup.string().required("Required"),
    flag: Yup.string().required("Required"),
    // currencyId: Yup.number().required("Required"),
  })
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik
        onSubmit={async (values, { resetForm }) => {
          handleCreateCountry(values)
          resetForm()
        }}
        initialValues={{
          name: "",
          code: "",
          flag: "",
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <div
            className="w-[80%] min-w-[80%] md:w-[80%] lg:w-[80%] h-[60%] bg-white  rounded-[12px] p-6 flex flex-col items-center justify-center gap-4"
            data-testid="card"
          >
            {/* inputs */}
            <CustomTextInput
              value={values.name}
              placeholder="country name"
              onChange={handleChange("name")}
              className="w-[80%]"
              errorMessage={
                errors.name && touched.name ? errors.name : undefined
              }
            />

            <CustomTextInput
              value={values.code}
              placeholder=" country code eg USA"
              onChange={handleChange("code")}
              className="w-[80%]"
              errorMessage={
                errors.code && touched.code ? errors.code : undefined
              }
            />
            <CustomTextInput
              value={values.flag}
              placeholder="Flag Uri"
              onChange={handleChange("flag")}
              className="w-[80%]"
              errorMessage={
                errors.flag && touched.flag ? errors.code : undefined
              }
            />

            {/* button */}
            <CustomButton
              title="Create Country"
              className="w-[80%] my-4"
              onClick={handleSubmit}
              isLoading={pending}
            />
          </div>
        )}
      </Formik>
    </div>
  )
}

export default CountryForm
