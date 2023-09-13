import { observer } from "mobx-react-lite"
import { decode64 } from "@/lib"
import { ItemStore } from "@/store/items/itemStore"
import { HStack, IconButton, Pressable, VStack } from "native-base"
import { Text } from "../ui"
import { Ionicons } from "@expo/vector-icons"
import theme from "@/theme"

interface ListItemProps {
  item: ItemStore,
  onToggleFavorite: (list: ItemStore) => void
  onOpenListItem: (item: ItemStore) => void
  isLiked: boolean
  isOpen: boolean
}

export const ListItem = observer(function(props: ListItemProps) {
  const { item, onToggleFavorite, isLiked, isOpen, onOpenListItem } = props

  return <Pressable onPress={() => onOpenListItem(item)}>
    {({isHovered, isPressed}) => {
      return <VStack
        borderBottomColor="gray.200"
        borderBottomWidth={1}
        p={3}
        bg={isPressed 
          ? 'coolGray.200' 
          : isHovered
          ? 'coolGray.200'
          : 'coolGray.100'
        }
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
        >
          <Text text={decode64(item.meaning)} />
          <IconButton 
            onPress={() => onToggleFavorite(item)}
            name="like-button"
            _icon={{
              as: Ionicons,
              name: isLiked ? "heart" : "heart-outline",
              color: theme.colors.primary[600],
            }}
          />
        </HStack>

        <HStack 
          display={isOpen ? "flex" : "none"}
          alignItems="center"
          justifyContent="space-between"
        >
          <VStack>
            <Text color="primary.500" text={decode64(item.korean)} />
            <Text color="coolGray.500" text={decode64(item.romaji)} />
          </VStack>
          <VStack>
            <IconButton 
              name="copy-content"
              bg="primary.500"
              rounded="full"
              _icon={{
                as: Ionicons,
                name: "md-copy-outline",
                color: "white"
              }}
            />
          </VStack>
        </HStack>
      </VStack>
    }}
  </Pressable>
})
