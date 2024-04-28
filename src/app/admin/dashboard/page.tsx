"use client"

import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode";
import {useDisconnect,useAccount} from 'wagmi'
import BalanceCard from "@/components/BalanceCard/BalanceCard";



type Props = {}

const Page = (props: Props) => {

  const {push} = useRouter()

  const [address,setAddress] = useState<string | null> (null)
  const [balance,setBalance] = useState<any | null> (null)
  const { disconnectAsync } = useDisconnect();


useEffect(()=>{
  let _token = localStorage.getItem("_tkn")
  
  if(_token && address === null){
    //decode token
    const decoded:any = jwtDecode(_token);
    console.log(decoded,'---------------> decodedddddd')
    decoded.data && setAddress(decoded.data.address)
  }
},[address])

//get balance when address is set



  return <div style={{width:"100%", minHeight:"100vh"}}>
           <Row gutter={16}>
            <Col className="gutter-row" span={18}>
              <div className="w-full h-[150px] bg-gray-800 rounded-md flex flex-col justify-center items-center">
                 <div className='text-gray-500 text-[18px] text-center font-bold'>
                    Demo DEX
                 </div>
                 <div className='text-gray-300 text-[26px] text-center font-bold'>
                   0.0.0.0.0.0
                 </div>
              </div>
            </Col>
         
           
            <Col className="gutter-row" span={6}>
             {address && <BalanceCard address={address} />}
            </Col>
           </Row>

  </div>
}

export default Page
