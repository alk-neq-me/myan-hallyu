import { SectionsStore } from "@/store/sections/sectionsStore"
import { observer } from "mobx-react-lite"
import { Box } from "native-base"
import { FlashList } from "@shopify/flash-list"
import { SectionListBox } from "./SectionListBox"

interface SectionsListProps {
  row: SectionsStore[]
  onNavigate: (id: string) => void
}

export const SectionsList = observer(function(props: SectionsListProps) {
  const { row, onNavigate } = props

  return <Box h="full" w="full">
    <FlashList
      contentContainerStyle={{
        paddingBottom: 200,
      }}
      numColumns={3}
      scrollEventThrottle={16}
      data={row}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <SectionListBox navigate={onNavigate} item={item} />
      }}
      estimatedItemSize={200}
    />
  </Box>
})
