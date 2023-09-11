import { useStore } from "@/store"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { ListItem } from "./ListItem"
import { Text } from "../ui"

interface ListItemProps {
  section_id: string
}

export const ListItems = observer(function(props: ListItemProps) {
  const { section_id } = props

  const { loadBySectionId, errors: listItemErrors } = useStore().listItem
  const { toggleFavorite, errors: favoriteItemErrors, findFavoritebyId } = useStore().favoriteItem

  const row = loadBySectionId(section_id)
  const errors = [...listItemErrors, ...favoriteItemErrors]

  if (errors.length) return <Text text="Error: list" />

  return (
    <View>
      <Text text="List" />
      {row.map(list => {
        return <ListItem key={list.id} item={list} onToggleFavorite={toggleFavorite} isLiked={Boolean(findFavoritebyId(list.id))} />
      })}
    </View>
  )
})
