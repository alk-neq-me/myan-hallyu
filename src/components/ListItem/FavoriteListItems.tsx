import { useStore } from "@/store"
import { observer } from "mobx-react-lite"
import { ListItem } from "./ListItem"
import { Box } from "native-base"
import { useCallback, useState } from "react"
import { FlashList } from "@shopify/flash-list"
import { ItemStore } from "@/store/items/itemStore"

interface FavoriteListItemProps {}

export const FavoriteListItems = observer(function(props: FavoriteListItemProps) {
  const {} = props
  const [selectedId, setSelectedId] = useState("")
  const [selectedRow, setSelectedRow] = useState<ItemStore[]>([])

  const {
    favoriteItem: {
      row: filtedRow,
      loading,
      toggleFavorite,
    }
  } = useStore()

  const row = [...filtedRow, ...selectedRow]

  const handleSelectItem = useCallback((item: ItemStore) => {
    setSelectedId(() => item.id)
  }, [])

  const handleToggleFavorite = useCallback((item: ItemStore) => {
    toggleFavorite(item)
    setSelectedRow((org) => {
      if (!org.includes(item)) return [...org, item]
      return org
    })
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
      data={row}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
    />
  </Box>
})
