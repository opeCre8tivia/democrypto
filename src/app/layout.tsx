"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { AppProps } from "next/app"

// wagmi
import {WagmiProvider } from 'wagmi'
import  {config} from '../config/config'

// tanstack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//next-auth
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })
const queryClient = new QueryClient() 

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <WagmiProvider config={config} >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
          </WagmiProvider>
        </Provider>
      </body>
    </html>
  )
}
