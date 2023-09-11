import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box, Pressable, VStack } from "native-base";
import { Button, Text } from "@/components/ui";
import { FlatList, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { greeting } from "@/lib";

interface WellcomeProps extends HomeTabScreenProps<"Wellcome"> {}

export const Wellcome = observer(function(props: WellcomeProps) {
  const { navigation } = props;
  const insets = useSafeAreaInsets()

  return <ScrollView>
    <Box pt={insets.top + 20} px={6}>
      <VStack alignItems="start" justifyContent="start" space="lg">
        <Box>
          <Text fontSize="3xl" letterSpacing="xs" text={greeting()} />
          <Text fontSize="xl" lineHeight="xs" text="There are a few new words to learn today. Explore and memorize!" />
        </Box>

        <Box>
          <Text fontSize="3xl" letterSpacing="xs" text="Speaking" />
          <Button title="see more" onPress={() => navigation.navigate("SectionList")} />
        </Box>

        <Box>
          <Text fontSize="3xl" letterSpacing="xs" text="My favorite list" />
          <Pressable w="full" h={150} bg="primary.600" rounded="2xl" display="flex" alignItems="center" justifyContent="center">
            <Text color="white" text="Favorite" />
          </Pressable>
        </Box>

        <Box>
          <Text fontSize="3xl" letterSpacing="xs" text="Featured videos" />
          <Button title="see more" onPress={() => navigation.navigate("Music")} />
        </Box>
      </VStack>
    </Box>
  </ScrollView>
})
