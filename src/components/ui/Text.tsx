import React from 'react'
import { Text as RNText } from 'native-base'

interface TextProps extends Partial<React.ComponentProps<typeof RNText>> {
  tx?: string
  text?: string;
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  const { tx, text, children, ...rest } = props
  const content = children ?? (tx ? tx : text)

  return <RNText {...rest}>{content}</RNText>
}
