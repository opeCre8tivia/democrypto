import { Button } from "antd"

type Props = {
  className?: string
  title: string
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

const CustomButton = ({
  className,
  title,
  onClick,
  isDisabled = false,
  isLoading = false,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      loading={isLoading}
      className={`bg-blue-600 min-w-[150px] h-[48px] text-white shadow-md ${className} rounded-full`}
    >
      {title}
    </Button>
  )
}

export default CustomButton
