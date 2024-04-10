import { getCrypto } from '@/server/actions'
import { Table } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import type { TableColumnsType } from 'antd';

type Props = {}

const MarketUpdateTable = (props: Props) => {
  
   const [currencies,setCurrencies] = useState<any[]>([])


   useEffect(()=>{
     (async()=>{
     let {data} =  await getCrypto(8)
     data && setCurrencies(data)
     })()
   },[])


   const columns:TableColumnsType<any> = [
    {
      title: 'Name',
      render:(rowData:any)=>{
        return(
            <div className='flex justify-start items-center'>
                <Image 
                 src={`/cryptoicon/${rowData.symbol.toLowerCase()}.svg`}
                 width={14} 
                 height={14}
                  alt='icon'
                   />

                <div className='text-white text-sm font-bold mx-1'>
                    {rowData.name}
                </div>
                <div className='text-white text-sm font-thin'>
                    |{rowData.symbol}
                </div>
            </div>
        )
      }
    },
    {
      title: 'Last Price',
      render:(rowData:any)=>{
        return(
            <div>
                {rowData.quote.USD.price}
            </div>
        )
      }
    },
    {
      title: '24h %',
      responsive: ['md'],
      render:(rowData:any)=>{
        let percentageChange = rowData.quote.USD.percent_change_24h.toFixed(2)
        return(
            <div className={`${percentageChange > 0 ? "text-green-300" : "text-red-500" }`}>
               {percentageChange}
            </div>
        )
      }
    },
    {
      title: 'Market Cap',
      responsive: ['md'],
      render:(rowData:any)=>{
        return(
            <div className=''>
                {Math.round(rowData.quote.USD.market_cap).toLocaleString()}
            </div>
        )
      }
    },
    {
      title: 'Last 7 Days',
      dataIndex: 'name',
      key: 'name',
      responsive: ['md'],
    },

]

  return (
    <Table
       dataSource={currencies}
       columns={columns}
       className='bg-gray-900 w-full'
       style={{background:"black"}}
       pagination={false}
       rowClassName="row"

     />
  )
}

export default MarketUpdateTable