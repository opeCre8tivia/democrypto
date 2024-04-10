"use client"

import { Country } from "@prisma/client"
import { Table } from "antd"
import Image from "next/image"
import React from "react"

type Props = {
  data: Country[]
}

const CountryTable = ({ data }: Props) => {
  const _columnz = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "flag",
    },

    {
      title: "Flag",
      render: (rowData: any) => {
        return (
          <div>
            {/* <Image src={rowData.flag} width={40} height={40} alt="flag" /> */}
            ****
          </div>
        )
      },
    },
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default CountryTable
