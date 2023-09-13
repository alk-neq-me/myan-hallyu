import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box, VStack } from "native-base"
import { Heading } from "@/components/ui"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface GrammarScreenProps extends HomeTabScreenProps<"Grammar"> {}

export const GrammarScreen = observer(function(props: GrammarScreenProps) {
  const {} = props
  const insets = useSafeAreaInsets()

  return <Box pt={insets.top + 20}>
    <VStack alignItems="start" px={6} justifyContent="start" space="lg">
      <VStack space="xs">
        <Heading fontSize="2xl" letterSpacing="xs" text="Grammar" />
      </VStack>
    </VStack>
  </Box>
})
