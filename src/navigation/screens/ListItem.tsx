import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../AppStack"
import { View } from "react-native"
import { Text } from "@/components/ui"
import { FavoriteListItems, ListItems } from "@/components/ListItem"
import { useEffect } from "react"

interface ListItemScreenProps extends AppStackScreenProps<"ListItem"> {}

export const ListItem = observer(function(props: ListItemScreenProps) {
  const {
    route: { params },
    navigation
  } = props

  console.log(params)

  useEffect(() => {
    navigation.setOptions({ title: params.fav ? "Favorite" : "List" })
  }, [params.fav])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text text={params.fav ? "Favorite <3" : "List <3"} />
      {params.fav ? <FavoriteListItems /> : <ListItems section_id={params.section_id} />}
    </View>
  )
})
