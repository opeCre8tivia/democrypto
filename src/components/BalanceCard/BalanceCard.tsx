"use client"
import React from 'react'
import { useEvmNativeBalance } from '@moralisweb3/next';

type Props = {
    address:string | null
}

const BalanceCard = ({address}: Props) => {

 const res = address && useEvmNativeBalance({ address })
    
  return (
    <div  className="w-full h-[150px] bg-gray-800 rounded-md flex flex-col justify-center items-center">
                 <div className='text-gray-500 text-[18px] text-center font-bold'>
                    Balance
                 </div>
                 <div className='text-gray-300 text-[26px] text-center font-bold'>
                 <h3>{`${res && res.data ? res.data.balance.ether:0.0} ETH`}</h3>
                 </div>
              </div>
  )
}

export default BalanceCard