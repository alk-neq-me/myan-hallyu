import { observer } from "mobx-react-lite"
import { View } from "react-native";
import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { useCallback } from "react";
import { HomeTabScreenProps } from "../HomeNavigator";

interface SettingsProps extends HomeTabScreenProps<"Settings"> {}

export const Settings = observer(function(props: SettingsProps) {
  const { navigation } = props;

  const { reset: settingReset } = useStore().setting
  const { reset: favoriteReset } = useStore().favoriteItem

  const handleResetApplication = useCallback(() => {
    settingReset()
    favoriteReset()
    // Other reset, -> quiz

    navigation.navigate("Onboarding")
  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text text="Settings" />
      <Button title="Reset Settings" onPress={handleResetApplication} />
    </View>
  )
})

