
import PermissionForm from "@/components/forms/PermissionForm"

import React from "react"

type Props = {}

const Page = async (props: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <PermissionForm />
    </div>
  )
}

export default Page
