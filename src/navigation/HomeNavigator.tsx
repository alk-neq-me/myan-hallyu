import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppStackParams, AppStackScreenProps } from "./AppStack"
import { CompositeScreenProps } from "@react-navigation/native"

import * as Screens from '@/navigation/screens';

export type HomeNavigatorParams = {
  SectionList: undefined
  Grammar: undefined
  Music: undefined
  Settings: undefined
}

export type HomeTabScreenProps<T extends keyof HomeNavigatorParams> = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParams, T>,
  AppStackScreenProps<keyof AppStackParams>
>

const Tab = createBottomTabNavigator<HomeNavigatorParams>()

export function HomeNavigator() {
  return <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Tab.Screen name="SectionList" component={Screens.SectionList} />
    <Tab.Screen name="Grammar" component={Screens.Grammar} />
    <Tab.Screen name="Music" component={Screens.Music} />
    <Tab.Screen name="Settings" component={Screens.Settings} />
  </Tab.Navigator>
}
