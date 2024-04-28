"use client"


import React, { useEffect, useState } from 'react'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// wagmi
import {useAccount, useConnect, useSignMessage, useDisconnect} from 'wagmi'
import {injected} from 'wagmi/connectors'
import Image from 'next/image'
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import axios from 'axios';
import { handleLogin } from '@/server/actions';


type Props = {}

const Page = (props: Props) => {

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();


  const [loading,setLoading] = useState<boolean>(false)
  const [token,setToken] = useState<string | null>(null)



  useEffect(()=>{

    if(token){
       localStorage.setItem("_tkn",token)
       push('/admin/dashboard')
    }

  },[token])

  const handleAuth = async()=>{
    try {
      
      setLoading(true)
      //check conn status
      if (isConnected) {
        console.log('disconn-->')
        await disconnectAsync();
        setLoading(false)
        return
      }
  
      const {accounts,chainId} = await connectAsync({connector:injected()})
       
      const userData = {
          address:accounts[0],
          chainId:chainId,
          network:'evm'
        }


        let res = await axios.post("/api/moralis/auth/requestChallengeEvm", userData ,{
          headers:{
            'content-type':'application/json'
          }
        })

        let {message,profileId} = res.data


       

        const signature = await signMessageAsync({ message });

     
        setLoading(false)

        //Sign the client in

        if(signature){
         
          let loginRes = await handleLogin({
            address:userData.address,
            profileId,
            signature
          })


          if(loginRes.isError === false){
              setToken(loginRes.payload)
          }
  
        }
       

    } catch (error) {
      console.log(error,'err') 
    }
  }
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-gray-900'>
         
        <div className='w-[80%] md:w-[60%] min-h-[300px] flex flex-col justify-center items-center rounded-md bg-gray-800'>
        
         <div className='w-[60%] h-[50px] flex justify-between items-center'>
             <div className='w-[40px] h-[40px] flex justify-center items-center bg-white overflow-hidden rounded-full'>
               <Image src='/metamask.png' width={30} height={30} alt='meta mask' />
             </div>
             <div className='w-[40px] h-[40px] flex justify-center items-center bg-white overflow-hidden rounded-full'>
               <Image src='/walletconnect.png' width={30} height={30} alt='meta mask' />
             </div>
             <div className='w-[40px] h-[40px] flex justify-center items-center bg-white overflow-hidden rounded-full'>
               <Image src='/trustwallet.png' width={30} height={30} alt='meta mask' />
             </div>
         </div>
        <div 
        onClick={()=> handleAuth()}
        className='w-[60%] h-[50px] flex justify-center items-center bg-gray-700 hover:bg-gray-600 text-white text-sm text-center font-medium rounded-md border border-gray-600 my-4'>
              {loading ? "Loading...":"Continue with Wallet"}
        </div>
        

        </div>
        
    </div>
  )
}

export default Page