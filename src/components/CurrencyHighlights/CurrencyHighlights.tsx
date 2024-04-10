import { getCrypto } from '@/server/actions'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}



const CurrencyHighlights = (props: Props) => {

   const [currencies,setCurrencies] = useState<any[]>([])


   useEffect(()=>{
     (async()=>{
     let {data} =  await getCrypto()
     console.log(data,'--------> 4 crypto')
     data && setCurrencies(data)
     })()
   },[])
  
  return (
    <div className='w-full min-h-[150px] flex justify-center items-start flex-wrap px-8 bg-gray-800'>

        {/* card */}
       {
         currencies && currencies.map((c,index)=>{
            let change = c.quote.USD.volume_change_24h
            let percentChange = c.quote.USD.percent_change_24h

            return  (
              <div className='w-full md:min-w-[18%] md:max-w-[20%] h-[120px] bg-gray-700 rounded-sm mx-2 my-2 p-4'>
              <div className='w-full h-auto flex justify-start gap-4 items-center'>
                {/* icon */}
                <div className=' text-sm text-white font-medium'>
                  <Image
                    src={`/cryptoicon/${c.symbol.toLowerCase()}.svg`}
                    alt="icon"
                    width={20}
                    height={20}
                   />
                </div>
                {/* name */}
                <div className=' text-sm text-white font-medium'>
                  {c.name}
                </div>
    
                {/* pair */}
                <div className=' text-sm text-gray-300 font-thin'>
                  {`${c.symbol}/USD`}
                </div>
              </div>
              {/* price */}
              <div className='text-lg text-white  font-bold'>
                 {`USD ${c.quote.USD.price.toFixed(2)}`}
              </div>
              {/* change */}
              <div className='flex justify-start gap-4 items-center'>
                <div className={`text-gray-300 text-sm font-thin`}>
                {`${change}`}
                </div>
                <div className={`text-white text-sm font-bold text-center w-auto p-1 rounded-md ${percentChange > 0 ? "bg-green-300":"bg-red-500"}`}>
                  {`${percentChange.toFixed(2)}%`}
                </div>
              </div>
           </div>
             )
         }
         )
       }
       
     

    </div>
  )
}

export default CurrencyHighlights