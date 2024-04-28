

import { NextResponse } from "next/server"
import Moralis from 'moralis'

 
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
         domain:'democrypto.vercel.app',
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