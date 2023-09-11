import { 
  Button as RNButton,
  ButtonProps as RNButtonProps
} from 'react-native'

interface ButtonProps extends RNButtonProps {}

export function Button(props: ButtonProps) {
  const { ...rest } = props;

  return (
    <RNButton
      {...rest}
    />
  )
}
