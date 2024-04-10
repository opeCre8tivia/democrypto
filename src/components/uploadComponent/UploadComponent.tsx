"use client"

import { AiOutlineCamera } from "react-icons/ai"
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { useAppDispatch } from "@/redux/hooks"
import Image from "next/image"

type Props = {
  className?: string
  title?: string
  onUpload: (uri: string) => void
  uri?: string
}

const UploadComponent = ({
  className,
  title = " Upload Company logo",
  uri,
  onUpload,
}: Props) => {
  const dispatch = useAppDispatch()
  return (
    <CldUploadWidget
      uploadPreset="n7r8dc6m"
      onUpload={(result: any, widget: any) => {
        if (result.event === "success") {
          let _url = result.info.secure_url

          let _thumbnail = result.info.thumbnail_url
          onUpload(_url)
        }
      }}
    >
      {({ open }) => {
        function handleOnClick(e: any) {
          e.preventDefault()
          open()
        }
        return (
          <div
            className={`w-full h-fit flex items-center justify-start ${className}`}
            onClick={handleOnClick}
          >
            {/* upload circle */}
            <div className="w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center">
              {uri && uri.length > 0 ? (
                <div className=" w-full h-full  overflow-hidden max-w-[80px] max-h-[80px] rounded-full">
                  <img
                    alt="uploaded img"
                    src={uri}
                    className="w-[80px] h-[80px]"
                  />
                </div>
              ) : (
                <AiOutlineCamera size={40} className="text-gray-200" />
              )}
            </div>
            {/* text */}
            <div className="ml-2">
              <div className="text-indigo-500 text-[16px] font-bold">
                {title}
              </div>
              <div className="text-gray-400 text-[12px] font-semibold">
                Square / circular logos work best. Minimum 256px x 256px
              </div>
            </div>
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default UploadComponent
