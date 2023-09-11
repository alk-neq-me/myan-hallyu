import { StoreProvider, rootStore } from '@/store'
import theme from '@/theme'
import { NativeBaseProvider } from 'native-base'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  const { children } = props

  return (
    <StoreProvider value={rootStore}>
      <NativeBaseProvider theme={theme}>
        {children}
      </NativeBaseProvider>
    </StoreProvider>
  )
}
