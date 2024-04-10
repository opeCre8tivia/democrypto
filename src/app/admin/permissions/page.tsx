import LinkButton from "@/components/linkButton/LinkButton"
import PermissionsTable from "@/components/tables/PermissionsTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const permissions = await prisma.permission.findMany()
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton href="/admin/permissions/create" title="Add Permission" />
      </div>
      <div>{permissions && <PermissionsTable data={permissions} />}</div>
    </div>
  )
}

export default Page
