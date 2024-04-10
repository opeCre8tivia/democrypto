"use client"

import { BusinessCategory } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: BusinessCategory[]
}

const BusinessCategoryTable = ({ data }: Props) => {
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
    }
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default BusinessCategoryTable
