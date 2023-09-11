import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite"
import { View } from "react-native";
import { AppStackScreenProps } from "../AppStack";
import { useCallback } from "react";

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {}

export const Onboarding = observer(function(props: OnboardingProps) {
  const { navigation } = props;
  const { makeDoneInit } = useStore().setting
  const { init: listInit } = useStore().listItem
  const { init: sectionsInit } = useStore().sections

  const handleClickGetStarted = useCallback(() => {
    makeDoneInit()  //  Remove Onboarding Page
    sectionsInit()
    listInit()  //  Load lists
    navigation.navigate("Home", {screen: "SectionList"})
  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button title="Get started" onPress={handleClickGetStarted} />
    </View>
  )
})
