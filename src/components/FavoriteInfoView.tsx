import { observer } from "mobx-react-lite"
import { Box, Pressable } from "native-base"
import { Heading } from "./ui"

interface FavoriteInfoViewProps {
  navigate: () => void
}

export const FavoriteInfoView = observer(function(props: FavoriteInfoViewProps) {
  const { navigate } = props

  return <Pressable 
    onPress={() => navigate()}
  >
    {({isPressed}) => {
      return <Box
        w="full" 
        h={150} 
        bg="primary.600" 
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
        <Heading color="white" text="Favorite" />
      </Box>
    }}
  </Pressable>
})
