
import { _loginAdmin } from "@/redux/actions/auth.actions"
import NavBar from "@/components/navBar/navBar"
import HeroSection from "@/components/HeroSection/HeroSection"
import CurrencyHighlights from "@/components/CurrencyHighlights/CurrencyHighlights"
import MarketUpdateTable from "@/components/MarketUpdateTable/MarketUpdateTable"
import { getCrypto } from "@/server/actions"
// import {clearAdminLoginState} from "@/redux/slices/adminAuth.slice";/

type Props = {}

const Page =async(props: Props) => {

let {data} =  await getCrypto(8)
  return (
    <div
      className="
    w-[100vw] 
    min-h-[100vh] 
   bg-gray-800
     flex 
     flex-col
     items-center
     justify-start
    "
    >
    {/* navigation */}
     <NavBar />

    {/* hero section */}

     <HeroSection />


    {/* currency highlights */}
    <CurrencyHighlights />


    {/* market update */}
    <div className="w-full h-auto bg-gray-900 px-[15px]">

    <div className="my-8 text-white text-xl font-bold">
      Market Update
    </div>

    {/* table */}
     <MarketUpdateTable data={data} />
    </div>
    
    </div>
  )
}

export default Page
