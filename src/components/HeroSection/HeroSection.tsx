import React from 'react'
import CustomButton from '../customButton/CustomButton'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const HeroSection = (props: Props) => {
  
  return (
    <div className='w-full  min-h-[65vh] md:h-[80%] flex justify-center items-start flex-wrap px-8 bg-gray-800'>
       {/* texts */}
       <div className='w-full md:w-[50%] h-auto'>
          <h1 className='text-white text-[40px] font-bold '>
            Buy & Sell Digital Assets in Democrypto
          </h1>

          <h1 className='text-white text-[16px] font-normal '>
            Democrypto is the easiest,safest and fastest way to buy and sell crypto assets
          </h1>

        <Link href='/login'>
        <CustomButton title='Get Started' className='my-8'/>
        </Link>  

       </div>

       {/* image */}
       <div className='w-full md:w-[50%] flex justify-center items-center h-auto'>
         <Image 
         src="/bg.png" 
         alt="hero_image"
         width={500}
         height={500}

          />

       </div>
    </div>
  )
}

export default HeroSection