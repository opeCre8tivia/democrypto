"use client"

import CustomButton from '@/components/customButton/CustomButton'
import React from 'react'
import Link from 'next/link'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='w-full h-[100vh] justify-center items-center'>
         <Link href="/admin/dashboard"> 
         <CustomButton
             title='Wallet'
             onClick={()=>{}}
           /></Link>
    </div>
  )
}

export default Page