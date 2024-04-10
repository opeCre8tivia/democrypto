"use client"

import { Role } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: Role[]
}

const RoleTable = ({ data }: Props) => {
  const _columnz = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    }
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default RoleTable
