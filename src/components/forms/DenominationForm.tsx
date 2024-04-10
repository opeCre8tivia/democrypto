"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import {
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

const DenominationForm = ({ currencies }: Props) => {
  const { pending } = useFormStatus()
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),
    value: Yup.number()
      .min(0, "Invalid value")
      .max(1000000, "Invalid value")
      .required("Required"),
    type: Yup.string().required("Required"),
    currencyId: Yup.number().required("Required"),
  })
  return (
    <div>
      <Formik
        onSubmit={async (values, { resetForm }) => {
          handleCreateDenomination(values)
          resetForm()
        }}
        initialValues={{
          name: "",
          value: 0,
          type: "",
          currencyId:"",
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
              type="number"
              value={values.value.toString()}
              placeholder="Value"
              onChange={(e) => {
                let v = e.target.value
                v && setFieldValue("value", parseInt(v))
              }}
              className="w-[80%] mt-2"
              errorMessage={
                errors.value && touched.value ? errors.value : undefined
              }
            />

            <CustomSelectInput
              placeholder="Select Currency"
              value={
                currencies
                  ? (currencies.find((c) => c.id === values.currencyId)
                      ?.name as string)
                  : ""
              }
              options={
                currencies
                  ? currencies.map((c) => {
                      return { value: c.id, label: c.name }
                    })
                  : []
              }
              onChange={(value) => {
                setFieldValue("currencyId", value)
              }}
              className="w-[80%] mt-2"
            />

            <CustomSelectInput
              placeholder="Select Type"
              value={values.type}
              options={[
                { value: "paper", label: "paper" },
                { value: "coin", label: "coin" },
              ]}
              onChange={(value) => {
                setFieldValue("type", value)
              }}
              className="w-[80%] mt-2"
            />

            {/* button */}
            <CustomButton
              title="Create Denomination"
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

export default DenominationForm
