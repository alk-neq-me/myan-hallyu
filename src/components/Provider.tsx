import { StoreProvider, rootStore } from '@/store'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  const { children } = props

  return (
    <StoreProvider value={rootStore}>
      {children}
    </StoreProvider>
  )
}
