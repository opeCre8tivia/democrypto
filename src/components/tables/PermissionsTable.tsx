"use client"

import { Permission } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: Permission[]
}

const PermissionsTable = ({ data }: Props) => {
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

export default PermissionsTable
