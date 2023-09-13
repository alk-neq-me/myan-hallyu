import { observer } from "mobx-react-lite";
import { Heading, Text } from "@/components/ui";
import { useStore } from "@/store";
import { AppStackScreenProps } from "../AppStack";
import { Box, VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SectionsList } from "@/components/SectionList/SectionList";
import { useCallback } from "react";

interface SectionsListScreenProps extends AppStackScreenProps<"SectionList"> {}

export const SectionsListScreen = observer(function(props: SectionsListScreenProps) {
  const { navigation } = props;
  const insets = useSafeAreaInsets()

  const { row, errors, loading } = useStore().sections;

  if (errors.length) return <Text>Error: (toast)</Text>

  if (loading) return <Text tx="loading..." />

  const handleOnClickSection = useCallback((id: string) => {
    navigation.navigate("ListItem", { fav: false, section_id: id })
  }, [])

  console.log("render-SectionList")

  return <Box pt={insets.top + 20}>
    <VStack alignItems="start" px={6} justifyContent="start" space="lg">
      <VStack space="xs">
        <Heading fontSize="2xl" letterSpacing="xs" text="Speaking" />
      </VStack>

      <VStack space="xs">
        <SectionsList row={row} onNavigate={handleOnClickSection} />
      </VStack>
    </VStack>
  </Box>
})
