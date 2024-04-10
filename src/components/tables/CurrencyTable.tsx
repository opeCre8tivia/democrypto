"use client"

import { Currency, User } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: Currency[]
}

const CurrencyTable = ({ data }: Props) => {
  const _columnz = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default CurrencyTable
