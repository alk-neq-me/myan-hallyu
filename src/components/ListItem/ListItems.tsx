import { useStore } from "@/store"
import { observer } from "mobx-react-lite"
import { ListItem } from "./ListItem"
import { useCallback, useState } from "react"
import { ItemStore } from "@/store/items/itemStore"
import { FlashList } from "@shopify/flash-list"
import { Box } from "native-base"
import { Text } from "../ui"

interface ListItemProps {
  section_id: string
}

export const ListItems = observer(function(props: ListItemProps) {
  const { section_id } = props
  const [selectedId, setSelectedId] = useState("")

  const {
    listItem: {
      loadBySectionId,
      loading: listItemLoading,
      errors,
    },
    favoriteItem: {
      loading: favoriteItemLoading,
      toggleFavorite,
    }
  } = useStore()

  const row = loadBySectionId(section_id)
  const loading = listItemLoading || favoriteItemLoading

  if (errors.length) return <Text text="Error" />

  if (loading) return <Text text="loading" />

  const handleSelectItem = useCallback((item: ItemStore) => {
    setSelectedId(() => item.id)
  }, [])

  const handleToggleFavorite = useCallback((item: ItemStore) => {
    toggleFavorite(item)
  }, [])

  const renderItem = ({ item }: { item: ItemStore }) => <ListItem 
    onOpenListItem={handleSelectItem}
    isOpen={item.id === selectedId}
    key={item.id} 
    item={item} 
    onToggleFavorite={handleToggleFavorite} 
    isLiked={item.isLiked} 
  />

  const keyExtractor = (item: {id:string}) => item.id

  return <Box h="full" w="full">
    <FlashList
      contentContainerStyle={{
        paddingBottom: 200
      }}
      data={row /*Array.from(Array(35), (_, i) => ({id: i, name: `hello ${i}`}))*/}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
    />
  </Box>
})
