"use client"

import Link from "next/link"
import { IconType } from "react-icons"
import { useRouter, usePathname } from "next/navigation"

type Props = {
  href: string
  title: string
  Icon: IconType
}

const MenuItem = ({ href, title, Icon }: Props) => {
  const _name = usePathname()

  return (
    <Link href={href} className="px-0">
      <div
        className={`w-[100%] min-w-[200px] h-[50px] flex items-center gap-2  hover:bg-gray-700 hover:border-r-1 hover:border-[#d9d9d9] ${
          href === _name
            ? " text-white bg-gray-600"
            : "border-r-[#f3f3f3]"
        }`}
      >
        {/* icon */}
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <Icon size={18} className="text-gray-500" />
        </div>
        {/* title */}
        <div
          className={`text-[14px] font-bold ${
            href === _name ? " text-white" : "text-gray-500"
          }`}
        >
          {title}
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
