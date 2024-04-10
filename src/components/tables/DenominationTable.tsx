"use client"

import { Denomination } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: Denomination[]
}

const DenominationTable = ({ data }: Props) => {
  const _columnz = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Currency",
      render: (rowData: any) => {
        return <div>{rowData && rowData.Currency.name}</div>
      },
    },
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default DenominationTable
