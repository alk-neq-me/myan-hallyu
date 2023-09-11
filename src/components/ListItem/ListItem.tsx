import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { Button, Text } from "../ui"
import { decode64 } from "@/lib"
import { ItemStore } from "@/store/items/itemStore"
import { useCallback } from "react"

interface ListItemProps {
  item: ItemStore,
  onToggleFavorite: (list: ItemStore) => void
  isLiked: boolean
}

export const ListItem = observer(function(props: ListItemProps) {
  const { item, onToggleFavorite, isLiked } = props

  const handleOnFavorite = useCallback(() => {
    onToggleFavorite(item)
  }, [])

  return <View>
    <Text text={decode64(item.korean)} />
    <Button title={isLiked ? "unlike" : "like"} onPress={handleOnFavorite} />
  </View>
})
