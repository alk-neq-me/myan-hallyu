import React from 'react'
import { Text as UIText } from 'native-base'

interface TextProps extends Partial<React.ComponentProps<typeof UIText>> {
  tx?: string
  text?: string;
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  const { tx, text, children, ...rest } = props
  const content = children ?? (tx ? tx : text)

  return <UIText {...rest}>{content}</UIText>
}
