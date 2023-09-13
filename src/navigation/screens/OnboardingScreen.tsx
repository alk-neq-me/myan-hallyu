import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../AppStack";
import { useCallback } from "react";
import { Box, VStack, Image } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OnboardingScreenProps extends AppStackScreenProps<"Onboarding"> {}

export const OnboardingScreen = observer(function(props: OnboardingScreenProps) {
  const { navigation } = props;

  const { makeDoneInit } = useStore().setting

  const {
    sections: {
      init: sectionsInit
    },
    listItem: {
      init: listInit
    },
    grammarSection: {
      init: grammarSectionInit
    },
    grammars: {
      init: grammarsInit
    }
  } = useStore()

  const insets = useSafeAreaInsets()

  const handleClickGetStarted = useCallback(() => {
    sectionsInit()
    listInit()
    grammarSectionInit()
    grammarsInit()

    makeDoneInit()  //  Remove Onboarding Page
    navigation.navigate("Home", {screen: "Wellcome"})
  }, [])

  return <Box pt={insets.top + 20} bg="white">
    <Box position="absolute">
      <Image
        source={require("@assets/cloud_balloon.png")}
        alt="photo"
      />
    </Box>

    <Box px={6}>
      <VStack justifyContent="flex-end" pb="20" h="full">
        <VStack pb={12}>
          <Text fontSize="4xl" text="Learn" lineHeight="xs" color="primary.100" />
          <Text fontSize="6xl" text="한국어" color="primary.600" />
          <Text fontSize="xl" text="A fun and easy way to learn korean" maxW="8rem" lineHeight="xs" color="gray.400" />
        </VStack>
        <Button w="full" title="Start learning!" colorScheme="primary" rounded="xl" onPress={handleClickGetStarted} />
      </VStack>
    </Box>

  </Box>
})
