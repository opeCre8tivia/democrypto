import { createSlice } from "@reduxjs/toolkit"
import { _getAdminByToken, _loginAdmin } from "../actions/auth.actions"

interface InitialStateTypes {
  loading: boolean
  token: string | null
  isError: boolean
  isSuccess: boolean
  msg: string | null
}

const initialState: InitialStateTypes = {
  loading: false,
  token: null,
  isError: false,
  isSuccess: false,
  msg: null,
}

const adminAuthSlice = createSlice({
  name: "admin/login",
  initialState: initialState,
  reducers: {
    clearAdminLoginState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.msg = null
    },
    logoutAdmin: (state) => {
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(_loginAdmin.pending, (state) => {
      state.loading = true
    })

    builder.addCase(_loginAdmin.fulfilled, (state, action) => {
      state.loading = false

      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.token = !action.payload.isError && action.payload.payload
    })

    builder.addCase(_loginAdmin.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })

    //admin
    builder.addCase(_getAdminByToken.pending, (state) => {
      state.loading = true
    })
    builder.addCase(_getAdminByToken.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      // state.farmAdmin =
      //     !action.payload.isError && action.payload.payload.farmAdmin;
      // state.farm = !action.payload.isError && action.payload.payload.farm;
    })
    builder.addCase(_getAdminByToken.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
  },
})

export const { clearAdminLoginState, logoutAdmin } = adminAuthSlice.actions
export default adminAuthSlice.reducer
