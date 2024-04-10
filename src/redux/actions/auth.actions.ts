import { API_URL } from "@/constants"
import { AppDispatch } from "@/redux/store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const _loginAdmin = createAsyncThunk<
  any,
  { email: string; password: string },
  { dispatch: AppDispatch }
>("login/admin", async function (payload) {
  try {
    console.log(payload)
    let { data } = await axios.post(`${API_URL}/auth/`, payload)
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error ! try again",
    }
  }
})

export const _getAdminByToken = createAsyncThunk<
  any,
  { token: string },
  { dispatch: AppDispatch }
>("get/Admin", async function (payload) {
  try {
    let { data } = await axios.post(`${API_URL}/admin/auth/get`, payload)
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error ! try again",
    }
  }
})
