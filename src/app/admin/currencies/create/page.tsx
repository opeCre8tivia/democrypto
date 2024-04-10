import CurrencyForm from "@/components/forms/CurrencyForm"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const countries = await prisma.country.findMany()

  return (
    <div className="w-full h-full bg-pink-300 flex justify-center items-center">
      <CurrencyForm countries={countries} />
    </div>
  )
}

export default Page
