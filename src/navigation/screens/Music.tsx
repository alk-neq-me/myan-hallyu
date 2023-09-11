import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box } from "native-base"
import { Text } from "@/components/ui"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface MusicProps extends HomeTabScreenProps<"Music"> {}

export const Music = observer(function(props: MusicProps) {
  const {} = props
  const insets = useSafeAreaInsets()

  return <Box pt={insets.top + 20} px={6}>
    <Text fontSize="3xl" text="Music" />
  </Box>
})

