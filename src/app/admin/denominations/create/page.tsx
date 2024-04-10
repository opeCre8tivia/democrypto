import CurrencyForm from "@/components/forms/CurrencyForm"
import DenominationForm from "@/components/forms/DenominationForm"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const currencies = await prisma.currency.findMany()

  return (
    <div className="w-full h-full bg-pink-300 flex justify-center items-center">
      <DenominationForm currencies={currencies} />
    </div>
  )
}

export default Page
