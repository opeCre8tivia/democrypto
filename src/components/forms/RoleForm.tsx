"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import {
  handleCreateRole,
} from "@/server/actions"
import { useFormStatus } from "react-dom"


const RoleForm = () => {
  const { pending } = useFormStatus()
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),
  })
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik
        onSubmit={async (values, { resetForm }) => {
          handleCreateRole (values)
          resetForm()
        }}
        initialValues={{
          name: "",
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
              placeholder="Role name"
              onChange={handleChange("name")}
              className="w-[80%]"
              errorMessage={
                errors.name && touched.name ? errors.name : undefined
              }
            />

            {/* button */}
            <CustomButton
              title="Create Role"
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

export default RoleForm
