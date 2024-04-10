import LinkButton from "@/components/linkButton/LinkButton"
import RoleTable from "@/components/tables/RoleTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const roles = await prisma.role.findMany()
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton href="/admin/roles/create" title="Add Role" />
      </div>
      <div>{roles && <RoleTable data={roles} />}</div>
    </div>
  )
}

export default Page
