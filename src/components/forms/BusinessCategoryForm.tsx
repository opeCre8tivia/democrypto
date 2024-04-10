"use client"

import React from "react"
import CustomTextInput from "../customTextInput/CustomTextInput"
import * as Yup from "yup"
import CustomButton from "../customButton/CustomButton"
import { Formik } from "formik"
import {
    handleCreateBusinessCategory
} from "@/server/actions"
import { useFormStatus } from "react-dom"
import UploadComponent from "../uploadComponent/UploadComponent"


const BusinessCategoryForm = () => {
  const { pending } = useFormStatus()
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Invalid name")
      .max(50, "Invalid Name")
      .required("Required"),
    theme: Yup.string()
      .min(7, "Invalid code")
      .max(7, "Invalid code")
      .required("Required"),
    iconUri: Yup.string()
      .required("Required"),
  })
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik
        onSubmit={async (values, { resetForm }) => {

          let data:{name:string,theme:string,iconUri:string} = {
             name:values.name,
             theme:values.theme,
             iconUri:values.iconUri
          }
          
          console.log(data,'----------> form data')
       
          handleCreateBusinessCategory(data)
          resetForm()
        }}
        initialValues={{
          name: "",
          theme:"",
          iconUri:""
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
              value={values.theme}
              type="color"
              placeholder="Enter Code"
              onChange={handleChange("theme")}
              className="w-[80%]"
              errorMessage={
                errors.theme && touched.theme ? errors.theme : undefined
              }
            />

            <UploadComponent
               title="Upload category icon"
               onUpload={(uri)=> setFieldValue("iconUri",uri)}
             />
             <div>
                {errors.iconUri && touched.iconUri ? errors.iconUri :""}
             </div>

            

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

export default BusinessCategoryForm
