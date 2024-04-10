import { Select } from "antd"
import { DefaultOptionType } from "antd/es/select"
import React from "react"

type Props = {
  onChange: (value: string) => void
  value: string
  options: DefaultOptionType[]
  className: any
  placeholder: string
}

const CustomSelectInput = ({
  options,
  value,
  onChange,
  className,
  placeholder,
}: Props) => {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      className={`w-full h-[40px] ${className}`}
    />
  )
}

export default CustomSelectInput
