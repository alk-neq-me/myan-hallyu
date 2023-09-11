import { getActiveRouteName, navigationRef } from "@/lib/navigation";
import { useEffect, useRef } from "react";
import { BackHandler, Platform } from "react-native";

export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  if (Platform.OS === "ios") return

  const canExitRef = useRef(canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        console.log("Not Ready")
        return false
      }

      const routeName = getActiveRouteName(navigationRef.getRootState())

      if (canExitRef.current(routeName)) {
        BackHandler.exitApp()
        return true
      }
      return false
    }

    BackHandler.addEventListener("hardwareBackPress", onBackPress)
  }, [])
}
