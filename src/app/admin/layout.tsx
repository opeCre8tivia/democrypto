"use client"

import AdminLayout from "@/components/adminLayout/AdminLayout"
import { _getAdminByToken } from "@/redux/actions/auth.actions"
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {useDisconnect,useAccount} from 'wagmi'

export default function SuperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const {push} = useRouter()
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();

  //fetch the user before displaying children
  useEffect(() => {
    let token = localStorage.getItem("_tkn")
    if (token) {
      
    } else {
      //redirect back to login
      push("/login")
    }
  }, [])

  //watch diconnection
  useEffect(()=>{
    if(!isConnected){
      async()=>{
       await disconnectAsync({},{
         onSuccess:()=>{
           console.log('---------successfully disconnected')
          push("/login")
   
         }
        })
       }
    }
  },[disconnectAsync,isConnected])

  return <AdminLayout>{children}</AdminLayout>
}
