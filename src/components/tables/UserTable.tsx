"use client"

import { User } from "@prisma/client"
import { Table } from "antd"
import React from "react"

type Props = {
  data: User[]
}

const UserTable = ({ data }: Props) => {
  const _columnz = [
    {
      title: "No",
      dataIndex: "",
      key: "",
      render:(rowData:User)=>{
        let index = data.findIndex((i)=> i.id === rowData.id)
        return (
          <div>
            {index + 1}
          </div>
        )
      }
    },
    {
      title: "Registered on",
      dataIndex: "",
      key: "",
      render:(rowData:User)=>{
        
        return (
          <div>
            {rowData.createdAt.toLocaleDateString()}
          </div>
        )
      }
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Owner",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Category",
      dataIndex: "",
      key: "",
      render:(rowData:any)=>{
        let _category = rowData.businessCategory ? rowData.businessCategory.name : "N/A"
        return (
          <div>
            {_category}
          </div>
        )
      }
    },
  ]
  return (
    <div>
      <Table dataSource={data} columns={_columnz} />
    </div>
  )
}

export default UserTable
