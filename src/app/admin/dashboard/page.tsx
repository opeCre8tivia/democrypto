"use client"

import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useEvmNativeBalance } from '@moralisweb3/next';
import { jwtDecode } from "jwt-decode";
import {useDisconnect,useAccount} from 'wagmi'



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
    decoded && setAddress(decoded.address)
  }
},[address])

//get balance when address is set

useEffect(()=>{
  if(address){
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    nativeBalance && setBalance(nativeBalance)
  }
},[address])

  return <div style={{width:"100%", minHeight:"100vh"}}>
           <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Businesses
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   20
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Items
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   80
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Sales
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   105
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    UoMs
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   5
                 </div>
              </div>
            </Col>
           </Row>

           <div className="text-lg text-white font-bold">
           <h3>{`Native Balance:  ${balance? balance.balance.ether:0.0} ETH`}</h3>
           </div>
  </div>
}

export default Page
