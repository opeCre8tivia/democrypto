import { useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type Props = {
  message: string
  show: boolean
  isError: boolean
  isSuccess: boolean
}

const CustomToast = ({ message, show = false, isError, isSuccess }: Props) => {
  useEffect(() => {
    if (show) {
      toast(message)
    }
  }, [message, show])

  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      toastStyle={{
        background:
          isError && !isSuccess ? "red" : isSuccess && !isError ? "green" : "",
        color: "white",
      }}
      progressStyle={{ background: "#ffffff" }}
    />
  )
}

export default CustomToast
