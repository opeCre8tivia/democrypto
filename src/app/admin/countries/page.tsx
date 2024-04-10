import LinkButton from "@/components/linkButton/LinkButton"
import CountryTable from "@/components/tables/CountryTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const countries = await prisma.country.findMany()
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton href="/admin/countries/create" title="Add Country" />
      </div>
      <div>{countries && <CountryTable data={countries} />}</div>
    </div>
  )
}

export default Page
