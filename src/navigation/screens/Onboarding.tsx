import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../AppStack";
import { useCallback } from "react";
import { Box, VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {}

export const Onboarding = observer(function(props: OnboardingProps) {
  const { navigation } = props;
  const { makeDoneInit } = useStore().setting
  const { init: listInit } = useStore().listItem
  const { init: sectionsInit } = useStore().sections

  const insets = useSafeAreaInsets()

  const handleClickGetStarted = useCallback(() => {
    makeDoneInit()  //  Remove Onboarding Page
    sectionsInit()
    listInit()  //  Load lists
    navigation.navigate("Home", {screen: "Wellcome"})
  }, [])

  return <Box pt={insets.top + 20} px={6} bg="primary.600">
    <VStack justifyContent="flex-end" pb="24" h="full">
      <VStack pb={12}>
        <Text fontSize="4xl" text="Learn" lineHeight="xs" color="white" />
        <Text fontSize="6xl" text="한국어" color="info.600" />
        <Text fontSize="xl" text="A fun and easy way to learn korean" maxW="8rem" lineHeight="xs" color="gray.400" />
      </VStack>
      <Button w="full" title="Start learning!" colorScheme="info" rounded="xl" onPress={handleClickGetStarted} />
    </VStack>
  </Box>
})
