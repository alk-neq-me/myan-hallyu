import { SectionsStore } from "@/store/sections/sectionsStore"
import { observer } from "mobx-react-lite"
import { Box, Pressable } from "native-base"
import { Heading } from "../ui"
import { useCallback } from "react"

interface SectionListBoxProps {
  item: SectionsStore
  navigate: (id: string) => void
}

export const SectionListBox = observer(function(props: SectionListBoxProps) {
  const { item, navigate } = props
  console.log("render Box")

  const handleNavigate = useCallback(() => {
    navigate(item.id)
  }, [])

  return <Pressable onPress={handleNavigate}>
    {({isPressed}) => {
      return <Box bg={"primary.600"} style={{ transform: [{scale: isPressed ? 0.96 : 1}] }} h={100} p={5} my={2} w={100} rounded="lg">
        <Heading text={item.name} color="white" />
      </Box>
    }}
  </Pressable>
})
