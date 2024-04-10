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

   const graphImages = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
  ]

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1
    return graphImages[rndInt]
  }


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
      responsive: ['md'],
      render:(rowData:any)=>{
        return(
            <div className=''>
                <Image src={getRandomGraph()} width={150} height={60} alt='' />
            </div>
        )
      }
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