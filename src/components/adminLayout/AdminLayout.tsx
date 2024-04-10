"use client"
export const dynamic = "force-dynamic"

import React, { useEffect, useState } from "react"

import {
  AiOutlineTeam,
  AiOutlineMenu,
  AiFillSetting,
  AiFillFile,
  AiFillPieChart,
  AiFillFileAdd,
  AiFillBuild,
  AiFillDashboard,
  AiFillHome,
  AiFillBoxPlot,
  AiFillUnlock,
  AiFillProfile,
  AiFillTag,
} from "react-icons/ai"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { logoutAdmin } from "@/redux/slices/adminAuth.slice"
import MenuItem from "../menuItem/MenuItem"

type Props = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [toggleProfile, setToggleProfile] = useState<boolean>(false)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [logoutLoading, setLogOutLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   //logout user
  //   if (logoutLoading) {
  //     localStorage.removeItem("_admin")
  //     //   dispatch(logoutAdmin())
  //     setTimeout(() => {
  //       router.push("/")
  //     }, 6000)
  //   }
  // }, [logoutLoading])

  return (
    <div className="w-[100vw] min-h-[100vh] relative bg-gray-50">
      {/* top bar */}
      <div className="w-[100vw] h-[10vh] fixed top-0 left-0 z-10 bg-white flex justify-between items-center pr-8 border-b-1 border-[#d9d9d9]">
        {/* humberger */}
        <div className="w-fit h-fit flex ">
          <div
            className="pl-10 pr-0 lg:hidden"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            <AiOutlineMenu size={30} />
          </div>
          {/* farm name */}
          <div className="flex w-fit h-fit px-0 lg:px-4">
            <div
              className={`text-[16px] lg:text-[30px] text-gray-400 font-extrabold px-1`}
            >
              Dashboard
            </div>
            {/* {farm &&
                            farm.brandName
                                .split(" ")
                                .map((n: string, index: number) => (
                                    <div
                                        key={Math.random() * 1000}
                                        className={`text-[20px] lg:text-[30px] text-indigo-${
                                            index === 0 ? 600 : 400
                                        } font-extrabold px-1`}
                                    >
                                        {n}
                                    </div>
                                ))} */}
          </div>
        </div>

        {/* logo */}

        <div className="w-[50px] h-[50px] flex justify-center items-center text-white font-bold rounded-full bg-orange-500">
          A
        </div>
      </div>

      <div className="flex relative">
        {/* nav bar left */}

        <div
          className={`${
            toggleMenu ? "fixed flex" : "hidden"
          } lg:fixed  top-[10vh] left-0  lg:flex flex-col  z-10 w-[200px] max-w-[200px] h-[90vh] bg-white transition-all translate-x-0.5 duration-1000 p-0 border-r-1 border-[#d9d9d9]`}
        >
          <MenuItem
            title="Dashboard"
            Icon={AiFillHome}
            href="/admin/dashboard"
          />
          <MenuItem
            title="Countries"
            Icon={AiOutlineTeam}
            href="/admin/countries"
          />
          <MenuItem
            title="Currencies"
            Icon={AiFillPieChart}
            href="/admin/currencies"
          />

          <MenuItem
            title="Denominations"
            Icon={AiFillBoxPlot}
            href="/admin/denominations"
          />
       
          <MenuItem
            title="Permissions"
            Icon={AiFillProfile}
            href="/admin/permissions"
          />
          <MenuItem
            title="Business Categories"
            Icon={AiFillProfile}
            href="/admin/businesscategories"
          />
          <MenuItem
            title="Businesses"
            Icon={AiFillBuild}
            href="/admin/businesses"
          />

          {/* <MenuItem title="Titles" Icon={AiFillTag} href="/admin/titles" /> */}

          {/* <MenuItem title="Forms" Icon={AiFillFileAdd} href="/admin/forms" /> */}

          {/* <MenuItem
            title="Evaluations"
            Icon={AiFillPieChart}
            href="/admin/evaluation/company/list"
          /> */}
          <MenuItem
            title="Analytics"
            Icon={AiFillFile}
            href="/admin/analytics"
          />
        </div>

        {/* children */}
        <div className="w-full lg:mt-[10vh] lg:ml-[16vw] p-4  flex flex-col justify-start min-h-[98vh] overflow-y-scroll bg-transparent mt-[10vh]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
