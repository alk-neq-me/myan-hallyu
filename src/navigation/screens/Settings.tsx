import { observer } from "mobx-react-lite"
import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { useCallback } from "react";
import { HomeTabScreenProps } from "../HomeNavigator";
import { Box, VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SettingsProps extends HomeTabScreenProps<"Settings"> {}

export const Settings = observer(function(props: SettingsProps) {
  const { navigation } = props;

  const { reset: settingReset } = useStore().setting
  const { reset: favoriteReset } = useStore().favoriteItem

  const insets = useSafeAreaInsets()

  const handleResetApplication = useCallback(() => {
    settingReset()
    favoriteReset()
    // Other reset, -> quiz

    navigation.navigate("Onboarding")
  }, [])

  return <Box pt={insets.top + 20} px={6}>
    <Text fontSize="3xl" text="Settings" />
    <VStack space="md">
      <Button title="Reset Settings" onPress={handleResetApplication} />
      <Button title="go onboarding" onPress={() => navigation.navigate("Onboarding")} />
    </VStack>
  </Box>
})

