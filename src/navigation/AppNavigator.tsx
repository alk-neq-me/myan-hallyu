import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@/lib/navigation";
import { AppStack } from "./AppStack";
import config from "@/config";
import { useBackButtonHandler } from "@/hooks";
import { observer } from "mobx-react-lite";

interface AppNavigatorProps 
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function(props: AppNavigatorProps) {
  const { ...reset } = props
  useBackButtonHandler(route => config.exitRoutes.includes(route))

  return (
    <NavigationContainer
      ref={navigationRef}
      {...reset}
    >
      <AppStack />
    </NavigationContainer>
  )
})
