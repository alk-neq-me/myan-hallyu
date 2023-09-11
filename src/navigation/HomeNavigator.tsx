import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppStackParams, AppStackScreenProps } from "./AppStack"
import { CompositeScreenProps } from "@react-navigation/native"

import * as Screens from '@/navigation/screens';
import { Feather, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import theme from "@/theme";

export type HomeNavigatorParams = {
  Wellcome: undefined
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
      headerShown: false,
    }}
    initialRouteName="Wellcome"
  >
    <Tab.Screen 
      name="Wellcome" 
      component={Screens.Wellcome} 
      options={{ 
        tabBarLabel: "Home",
        tabBarIcon: (props) => <Feather 
          name="home" 
          size={20} 
          color={props.focused ? theme.colors.primary[600] : "black"} 
        />
      }} 
    />
    <Tab.Screen 
      name="Grammar" 
      component={Screens.Grammar} 
      options={{ 
        tabBarIcon: (props) => <MaterialCommunityIcons 
          name="sticker-text" 
          size={20} 
          color={props.focused ? theme.colors.primary[600] : "black"} 
        />
      }} 
    />
    <Tab.Screen 
      name="Music" 
      component={Screens.Music} 
      options={{ 
        tabBarIcon: (props) => <Fontisto 
          name="applemusic" 
          size={20} 
          color={props.focused ? theme.colors.primary[600] : "black"} 
        />
      }} 
    />
    <Tab.Screen 
      name="Settings" 
      component={Screens.Settings} 
      options={{ 
        tabBarIcon: (props) => <MaterialIcons 
          name="settings" 
          size={20} 
          color={props.focused ? theme.colors.primary[600] : "black"} 
        />
      }} 
    />
  </Tab.Navigator>
}
