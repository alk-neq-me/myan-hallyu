import { Box } from "native-base"
import { Heading } from "./ui"
import { observer } from "mobx-react-lite"

export const Nothing = observer(function() {
  return <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    h="4/6"
  >
    <Heading text="Empty" />
  </Box>
})
