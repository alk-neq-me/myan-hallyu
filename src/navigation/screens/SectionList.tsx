import { observer } from "mobx-react-lite"
import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { useCallback } from "react";
import { AppStackScreenProps } from "../AppStack";
import { Box, FlatList } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SectionListProps extends AppStackScreenProps<"SectionList"> {}

export const SectionList = observer(function(props: SectionListProps) {
  const { navigation } = props;
  const insets = useSafeAreaInsets()

  const { row, errors, loading } = useStore().sections;

  if (errors.length) return <Text>Error: (toast)</Text>

  if (loading) return <Text tx="loading..." />

  const handleOnClickSection = (id: string) => {
    navigation.navigate("ListItem", { fav: false, section_id: id })
  }

  return <Box pt={insets.top} px={6}>
    <FlatList 
      pt={12}
      data={row}
      numColumns={2}
      keyExtractor={(i) => i.id}
      renderItem={({item}) => (
        <Button key={item.id} title={item.name} onPress={() => handleOnClickSection(item.id)} />
      )}
    />
  </Box>
})
