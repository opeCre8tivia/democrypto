import { getCrypto } from '@/server/actions'
import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

type Props = {}

const MarketUpdateTable = (props: Props) => {
  
   const [currencies,setCurrencies] = useState<any[]>([])


   useEffect(()=>{
     (async()=>{
     let {data} =  await getCrypto(10)
     console.log(data,'--------> 4 crypto')
     data && setCurrencies(data)
     })()
   },[])

  return (
    <Table
       dataSource={[]}
       columns={[]}
     />
  )
}

export default MarketUpdateTable