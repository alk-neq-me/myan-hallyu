import { Provider } from "@/components";
import { AppNavigator } from "@/navigation";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import * as Linking from 'expo-linking';
import { Text } from "@/components/ui";

const prefix = Linking.createURL("/")
const config = {
  screens: {
    Onboarding: "onboarding",
    /**
     * to go list by section id
     * adb shell am start -W -a android.intent.action.VIEW -d "exp://192.168.100.206:8081/--/list-item/false/581dfa67-a42c-48cf-9fef-cf1119704a37" host.exp.exponent
     * to go favorite
     * adb shell am start -W -a android.intent.action.VIEW -d "exp://192.168.100.206:8081/--/list-item/true" host.exp.exponent
     **/
    ListItem: {
      path: "list-item/:fav/:section_id?",
      parse: {
        fav: (fav: string) => fav === "false" 
          ? false
          : fav === "true"
          ? true
          : false
      }
    },
    Home: {
      screens: {
        SectionList: "",
        Grammar: "grammar",
        Music: "music",
        Settings: "settings"
      }
    }
  }
}

export default function App() {
  const linking = {
    prefixes: [prefix],
    config
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* Error Boundary */}

      <Provider>
        <AppNavigator 
          linking={linking}
          // initialState={}
          fallback={<Text text="Loading..." />}
        />
      </Provider>
    </SafeAreaProvider>
  );
}
