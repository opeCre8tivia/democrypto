import { Button } from "antd"
import Link from "next/link"
import React from "react"

type Props = {
  href: string
  title: string
}

const LinkButton = ({ href, title }: Props) => {
  return (
    <Link href={href}>
      <Button>{title}</Button>
    </Link>
  )
}

export default LinkButton
