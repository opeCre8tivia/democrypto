"use client"

import { Input } from "antd"

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value: string
  className?: string
  isError?: boolean
  errorMessage?: string
  id?: string
  name?: string
  disabled?: boolean
}

const CustomTextInput = ({
  placeholder,
  onChange,
  type,
  value,
  className,
  isError = false,
  errorMessage,
  id,
  name,
  disabled,
}: Props) => {
  return (
    <Input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      disabled={disabled}
      className={`h-[48px bg-gray-900] ${className}`}
    />
  )
}

export default CustomTextInput
