import { 
  Button as RNButton,
} from 'native-base'

interface ButtonProps extends Partial<React.ComponentProps<typeof RNButton>> {
  tx?: string
  title?: string;
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  const { tx, title, children, ...rest } = props
  const content = children ?? (tx ? tx : title)

  return (
    <RNButton {...rest}>{content}</RNButton>
  )
}
