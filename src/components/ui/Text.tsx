import React from 'react'
import { TextProps as RNTextProps, Text as RNText } from 'react-native'

interface TextProps extends RNTextProps {
  tx?: string
  text?: string;
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  const { tx, text, children, ...rest } = props
  const content = children ?? (tx ? tx : text)

  return <RNText {...rest}>{content}</RNText>
}
