import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";

import * as Screens from '@/navigation/screens';
import { useStore } from "@/store";
import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeNavigator, HomeNavigatorParams } from "./HomeNavigator";

export type ListItemScreenParams = { fav: true } | { fav: false, section_id: string }

export type AppStackParams = {
  Onboarding: undefined
  Home: NavigatorScreenParams<HomeNavigatorParams>
  ListItem: ListItemScreenParams
  SectionList: undefined
}

const Stack = createNativeStackNavigator<AppStackParams>()

export type AppStackScreenProps<T extends keyof AppStackParams> = NativeStackScreenProps<AppStackParams, T>

export const AppStack = observer(function() {
  const { setting: {doneInit} } = useStore()

  return <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={ !doneInit ? "Onboarding" : "Home" }
  >
    <Stack.Screen name="Home" component={HomeNavigator} />
    <Stack.Screen name="SectionList" component={Screens.SectionList} />
    <Stack.Screen name="ListItem" options={{ title: "Favorite" }} component={Screens.ListItem} initialParams={{ fav: true }} />
    <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Screens.Onboarding} />
  </Stack.Navigator>
})
