import { useStore } from "@/store"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { ListItem } from "./ListItem"
import { Text } from "../ui"

interface FavoriteListItemProps {}

export const FavoriteListItems = observer(function(props: FavoriteListItemProps) {
  const {} = props

  const { row, toggleFavorite, errors, findFavoritebyId } = useStore().favoriteItem

  if (errors.length) return <Text text="Error: list" />

  return (
    <View>
      <Text text="Favorite List" />
      {row.map(list => {
        return <ListItem key={list.id} item={list} onToggleFavorite={toggleFavorite} isLiked={Boolean(findFavoritebyId(list.id))} />
      })}
    </View>
  )
})
