import LinkButton from "@/components/linkButton/LinkButton"
import CountryTable from "@/components/tables/CountryTable"
import CurrencyTable from "@/components/tables/CurrencyTable"
import DenominationTable from "@/components/tables/DenominationTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const denominations = await prisma.denomination.findMany({
    include: { Currency: true },
  })
  return (
    <div className="w-full h-full justify-start items-center">
      {/* top */}
      <div className="w-full h-fit flex justify-end">
        <LinkButton
          href="/admin/denominations/create"
          title="Add Denomination"
        />
      </div>
      <div>{denominations && <DenominationTable data={denominations} />}</div>
    </div>
  )
}

export default Page
