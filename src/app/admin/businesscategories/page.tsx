import LinkButton from "@/components/linkButton/LinkButton"
import BusinessCategoryTable from "@/components/tables/BusinessCategoryTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const categories = await prisma.businessCategory.findMany()
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton href="/admin/businesscategories/create" title="Add Biz category" />
      </div>
      <div>{categories && <BusinessCategoryTable data={categories} />}</div>
    </div>
  )
}

export default Page
