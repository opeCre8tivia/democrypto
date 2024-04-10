"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import {
    handleCreatePermission
} from "@/server/actions"
import { useFormStatus } from "react-dom"


const PermissionForm = () => {
  const { pending } = useFormStatus()
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),
    code: Yup.string()
      .min(4, "Invalid code")
      .max(6, "Invalid code")
      .required("Required"),
  })
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik
        onSubmit={async (values, { resetForm }) => {

          let data:{name:string,code:number} = {
             name:values.name,
             code:parseInt(values.code)
          }
          handleCreatePermission (data)
          resetForm()
        }}
        initialValues={{
          name: "",
          code:"",
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
 
           <CustomTextInput
              value={values.code}
              placeholder="Enter Code"
              onChange={handleChange("code")}
              className="w-[80%]"
              errorMessage={
                errors.code && touched.code ? errors.code : undefined
              }
            />

            {/* button */}
            <CustomButton
              title="Create Permission"
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

export default PermissionForm
