import LinkButton from "@/components/linkButton/LinkButton"
import CountryTable from "@/components/tables/CountryTable"
import CurrencyTable from "@/components/tables/CurrencyTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const currencies = await prisma.currency.findMany()
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton href="/admin/currencies/create" title="Add Currency" />
      </div>
      <div>{currencies && <CurrencyTable data={currencies} />}</div>
    </div>
  )
}

export default Page
