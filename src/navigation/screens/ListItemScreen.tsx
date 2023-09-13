import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../AppStack"
import { Heading } from "@/components/ui"
import { FavoriteListItems, ListItems } from "@/components/ListItem"
import { Box, VStack } from "native-base"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface ListItemScreenProps extends AppStackScreenProps<"ListItem"> {}

export const ListItemScreen = observer(function(props: ListItemScreenProps) {
  const {
    route: { params },
  } = props
  const insets = useSafeAreaInsets()

  return <Box pt={insets.top + 20}>
    <VStack alignItems="start" px={6} justifyContent="start" space="lg">
      <VStack space="xs">
        <Heading fontSize="2xl" letterSpacing="xs" text={params.fav ? "Favorite" : "Speaking"} />
      </VStack>

      <VStack space="xs">
        {params.fav ? <FavoriteListItems /> : <ListItems section_id={params.section_id} />}
      </VStack>
    </VStack>
  </Box>
})
