"use client"

import CustomTextInput from '@/components/customTextInput/CustomTextInput'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='w-full h-[100vh] bg-gray-900 flex flex-wrap justify-center items-start gap-4 p-4'>
        <div className='w-full md:w-[28%] min-h-[200px] bg-gray-800 rounded-sm'>

        </div>
        <div className='w-full md:w-[40%] min-h-[200px] bg-gray-800 rounded-sm'>
            {/* form */}
            <div className='w-full md:w-[50%] flex justify-start items-start'>
                <CustomTextInput
                  placeholder='Enter Amount'
                  onChange={(t)=> console.log(t,'-------> input')}
                  value=''
                 />
            </div>

            {/* qrcode & address */}
            <div className='w-full md:w-[50%] flex justify-start items-start'>

            </div>

        </div>
        <div className='w-full md:w-[28%] min-h-[200px] bg-gray-800 rounded-sm'>

        </div>
    </div>
  )
}

export default Page