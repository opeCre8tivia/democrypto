import UserTable from "@/components/tables/UserTable"
import prisma from "@/lib/prisma"
import React from "react"

type Props = {}

const Page = async (props: Props) => {
  const businesses = await prisma.user.findMany({
    include:{
      businessCategory:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return <div>{businesses && <UserTable data={businesses} />}</div>
}

export default Page
