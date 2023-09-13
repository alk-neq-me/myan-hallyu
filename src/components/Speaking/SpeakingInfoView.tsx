import { observer } from "mobx-react-lite"
import { Box, FlatList, Pressable } from "native-base"
import { Heading } from "../ui"
import { useStore } from "@/store"

interface SpeakingInfoViewProps {
  navigate: (id: string) => void
}

export const SpeakingInfoView = observer((props: SpeakingInfoViewProps) => {
  const { navigate } = props
  const { info_row } = useStore().sections

  return <FlatList 
    data={info_row}
    keyExtractor={i => `${i.id}`}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => {
      return <Pressable
        onPress={() => navigate(item.id)}
      >
        {({isPressed}) => {
          return <Box
            m={2}
            bg="primary.600"
            w={250}
            h={150}
            rounded="2xl" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }}
          >
            <Heading color="white" text={item.name} />
          </Box>
        }}
      </Pressable>
    }}
    horizontal
  />
})
