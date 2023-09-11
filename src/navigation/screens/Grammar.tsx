import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box } from "native-base"
import { Text } from "@/components/ui"

interface GrammarProps extends HomeTabScreenProps<"Grammar"> {}

export const Grammar = observer(function(props: GrammarProps) {
  const {} = props

  return <Box>
    <Text text="Grammar" />
  </Box>
})
