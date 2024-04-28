

import { NextResponse } from "next/server"
import Moralis from 'moralis'
import MoralisConfig from '@/app/api/m/moralis/[...moralis]'
 


let config = {
    apiKey:process.env.MORALIS_API_KEY as string,
    authentication: {
       domain:'http://localhost:3000/login',
       uri: process.env.NEXTAUTH_URL as string,
       timeout: 120,
     },
}
 
export async function POST(
    req: Request
) {


        let {address,chainId,network} = await req.json()
        console.log(address,'---------> req reached')
       await Moralis.start({apiKey:process.env.MORALIS_API_KEY})

       try {

        let message = await Moralis.Auth.requestMessage({
         address,
         chain:chainId,
         statement:"web3 auth",
         domain:'goldpointofsale.com',
         uri: process.env.NEXTAUTH_URL as string,
         timeout: 120
        })


        return NextResponse.json(message)
        
       } catch (error) {
        console.log(error,'=====***=====')
        return NextResponse.json({
            isError: true,
            msg:error,
          })
       }
        
}