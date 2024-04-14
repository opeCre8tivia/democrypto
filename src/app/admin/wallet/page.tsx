import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='w-full h-[100vh] bg-gray-900 flex justify-center items-start gap-4 p-4'>
        <div className='w-full md:w-[30%] min-h-[200px] bg-gray-800 rounded-sm'>

        </div>
        <div className='w-full md:w-[40%] min-h-[200px] bg-gray-800 rounded-sm'>

        </div>
        <div className='w-full md:w-[30%] min-h-[200px] bg-gray-800 rounded-sm'>

        </div>
    </div>
  )
}

export default Page