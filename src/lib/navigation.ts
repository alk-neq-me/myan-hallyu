import { AppStackParams } from '@/navigation'
import { NavigationState, createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef<AppStackParams>()


/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(state: ReturnType<typeof navigationRef.getState>): keyof AppStackParams {
  const route = state.routes[state.index]
  if (!route.state) return route.name as keyof AppStackParams
  return getActiveRouteName(route.state as NavigationState<AppStackParams>)
}


/**
 * use this to navigate without the navigation
 */
export function navigate(...args: Parameters<typeof navigationRef.navigate>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args)
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}
