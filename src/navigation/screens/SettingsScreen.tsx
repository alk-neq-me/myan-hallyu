import { observer } from "mobx-react-lite"
import { Button, Heading, Text } from "@/components/ui";
import { useStore } from "@/store";
import { useCallback } from "react";
import { HomeTabScreenProps } from "../HomeNavigator";
import { Box, VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SettingsScreenProps extends HomeTabScreenProps<"Settings"> {}

export const SettingsScreen = observer(function(props: SettingsScreenProps) {
  const { navigation } = props;

  const { reset: settingReset } = useStore().setting
  const { reset: favoriteReset } = useStore().favoriteItem

  const insets = useSafeAreaInsets()

  const handleResetApplication = useCallback(() => {
    settingReset()
    favoriteReset()
    // Other reset, -> quiz

    // clean all AsyncStorage
    AsyncStorage.clear()

    navigation.navigate("Onboarding")
  }, [])

  return <Box pt={insets.top + 20}>
    <VStack alignItems="start" px={6} justifyContent="start" space="lg">
      <VStack space="xs">
        <Heading fontSize="2xl" letterSpacing="xs" text="Settings" />
      </VStack>

      <VStack space="xs">
        <Button title="Reset Settings" onPress={handleResetApplication} />
        <Button title="go onboarding" onPress={() => navigation.navigate("Onboarding")} />
      </VStack>
    </VStack>
  </Box>
})

