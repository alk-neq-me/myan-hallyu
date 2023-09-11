import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box } from "native-base"
import { Text } from "@/components/ui"

interface MusicProps extends HomeTabScreenProps<"Music"> {}

export const Music = observer(function(props: MusicProps) {
  const {} = props

  return <Box>
    <Text text="Music" />
  </Box>
})

