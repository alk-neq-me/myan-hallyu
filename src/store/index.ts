import { createContext, useContext } from 'react'
import { RootStore } from './store'

export * from './store'
export * from './counterStore'

export const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
