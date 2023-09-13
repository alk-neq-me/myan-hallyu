import { 
  Button as UIButton,
} from 'native-base'

interface ButtonProps extends Partial<React.ComponentProps<typeof UIButton>> {
  tx?: string
  title?: string;
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  const { tx, title, children, ...rest } = props
  const content = children ?? (tx ? tx : title)

  return (
    <UIButton {...rest}>{content}</UIButton>
  )
}
