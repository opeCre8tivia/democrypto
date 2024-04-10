import Image from 'next/image'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div
className="
w-[100vw] h-[60px] 
bg-gray-900
  flex 
  items-center
  justify-between
  "
>

  <div className='flex items-center gap-4'>
  <Image src="/democryptologo.png" width={30} height={20} alt="logo" />
  <div className='text-white text-sm font-bold'>Democrypto</div>
  </div>
 
</div>
  )
}

export default NavBar