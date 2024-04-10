
import BusinessCategoryForm from "@/components/forms/BusinessCategoryForm"

import React from "react"

type Props = {}

const Page = async (props: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BusinessCategoryForm/>
    </div>
  )
}

export default Page
