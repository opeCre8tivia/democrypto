"use client"

import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import * as Yup from "yup"
import { Formik } from "formik"
import CustomTextInput from "@/components/customTextInput/CustomTextInput"
import CustomButton from "@/components/customButton/CustomButton"
import { useAppDispatch } from "@/redux/hooks"
import CustomToast from "@/components/customToast/CustomToast"
import { MdLock } from "react-icons/md"
import { _loginAdmin } from "@/redux/actions/auth.actions"
import { clearAdminLoginState } from "@/redux/slices/adminAuth.slice"
import NavBar from "@/components/navBar/navBar"
import HeroSection from "@/components/HeroSection/HeroSection"
import CurrencyHighlights from "@/components/CurrencyHighlights/CurrencyHighlights"
import MarketUpdateTable from "@/components/MarketUpdateTable/MarketUpdateTable"
// import {clearAdminLoginState} from "@/redux/slices/adminAuth.slice";/

type Props = {}

const Page = (props: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { token, isError, isSuccess, msg, loading } = useSelector(
    (state: RootState) => state.adminAuthSlice
  )

  useEffect(() => {
    if (token) {
      //store token in localstorage
      localStorage.setItem("_admin", token)

      //check if token has been set
      let isSet = localStorage.getItem("_admin")
      if (isSet) {
        router.push("/admin/dashboard")
      }
    }
  }, [token])

  useEffect(() => {
    if (isError || isSuccess) {
      setTimeout(() => {
        dispatch(clearAdminLoginState());
      }, 4000)
    }
  }, [isError, isSuccess])

  const handleLogin = (data: { email: string; password: string }) => {
    dispatch(_loginAdmin(data));
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must have atleast 6 characters")
      .max(50, "Too Long!")
      .required("Required"),
  })
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
     <MarketUpdateTable />
    </div>
    
      
    </div>
  )
}

export default Page
