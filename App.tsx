import { Provider } from "@/components";
import { AppNavigator } from "@/navigation";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import * as Linking from 'expo-linking';
import { Text } from "@/components/ui";
import { LogBox } from "react-native";

// Note that I’m using the ‘native-base’ package. 
// There is a little bug for the package in React 18
// So, Ignore This - [remove warn yellow box]
LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
])

const prefix = Linking.createURL("/")
const config = {
  screens: {
    Onboarding: "onboarding",
    SectionList: "section",
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
        Wellcom: "",
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
