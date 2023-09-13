import React from 'react'
import { Heading as UIHeading } from 'native-base'

interface HeadingProps extends Partial<React.ComponentProps<typeof UIHeading>> {
  tx?: string
  text?: string;
  children?: React.ReactNode
}

export function Heading(props: HeadingProps) {
  const { tx, text, children, ...rest } = props
  const content = children ?? (tx ? tx : text)

  return <UIHeading {...rest}>{content}</UIHeading>
}
