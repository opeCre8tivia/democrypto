"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import { handleCreateCurrency } from "@/server/actions"
import { Country } from "@prisma/client"
import { Select } from "antd"
import CustomSelectInput from "../customSelectInput/CustomSelectInput"
import { useFormStatus } from "react-dom"
type Props = {
  countries: Country[]
}

const CurrencyForm = ({ countries }: Props) => {
  const { pending } = useFormStatus()
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),
    code: Yup.string()
      .min(2, "Invalid code")
      .max(10, "Invalid Code")
      .required("Required"),
    symbol: Yup.string()
      .min(1, "Invalid symbol")
      .max(4, "Too Long!")
      .required("Required"),
  })
  return (
    <div>
      <Formik
        onSubmit={async (values, { resetForm }) => {
          handleCreateCurrency(values)
          resetForm()
        }}
        initialValues={{
          name: "",
          code: "",
          symbol: "",
          countryId: "",
        }}
        validationSchema={LoginSchema}
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
            className="w-[80%] min-w-[80%] md:w-[80%] lg:w-[80%] h-full bg-white  rounded-[12px] p-6 flex flex-col items-center justify-center"
            data-testid="card"
          >
            {/* inputs */}
            <CustomTextInput
              value={values.name}
              placeholder="currency name"
              onChange={handleChange("name")}
              className="w-[80%]"
              errorMessage={
                errors.name && touched.name ? errors.name : undefined
              }
            />

            <CustomTextInput
              type="code"
              value={values.code}
              placeholder=" code eg:USD"
              onChange={handleChange("code")}
              className="w-[80%] mt-2"
              errorMessage={
                errors.code && touched.code ? errors.code : undefined
              }
            />

            <CustomTextInput
              type="Symbol"
              value={values.symbol}
              placeholder=" code eg:$"
              onChange={handleChange("symbol")}
              className="w-[80%] mt-2"
              errorMessage={
                errors.symbol && touched.symbol ? errors.symbol : undefined
              }
            />

            <CustomSelectInput
              placeholder="Select Country"
              value={
                countries
                  ? (countries.find((c) => c.id === values.countryId)
                      ?.name as string)
                  : ""
              }
              options={
                countries
                  ? countries.map((c) => {
                      return { value: c.id, label: c.name }
                    })
                  : []
              }
              onChange={(value) => {
                setFieldValue("countryId", value.toString())
              }}
              className="w-[80%] mt-2"
            />

            {/* button */}
            <CustomButton
              title="Create Currency"
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

export default CurrencyForm
