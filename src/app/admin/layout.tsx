"use client"

import AdminLayout from "@/components/adminLayout/AdminLayout"
import { _getAdminByToken } from "@/redux/actions/auth.actions"
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SuperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  //fetch the user before displaying children
  useEffect(() => {
    let token = localStorage.getItem("_admin")
    if (token) {
      dispatch(_getAdminByToken({ token: token }))
    } else {
      //redirect back to login
      // router.push("/")
    }
  }, [])

  return <AdminLayout>{children}</AdminLayout>
}
