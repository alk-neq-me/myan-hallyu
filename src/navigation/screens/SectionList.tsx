import { observer } from "mobx-react-lite"
import { FlatList, View } from "react-native";
import { Button, Text } from "@/components/ui";
import { useStore } from "@/store";
import { useCallback } from "react";
import { HomeTabScreenProps } from "../HomeNavigator";

interface SectionListProps extends HomeTabScreenProps<"SectionList"> {}

export const SectionList = observer(function(props: SectionListProps) {
  const { navigation } = props;

  const { row } = useStore().sections;
  const { errors, loading } = useStore().listItem;

  if (errors.length) return <Text>Error: (toast)</Text>

  if (loading) return <Text tx="loading..." />


  const handleOnClickSection = useCallback((id: string) => {
    navigation.navigate("ListItem", { fav: false, section_id: id })
  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <FlatList 
        data={row}
        keyExtractor={(i) => i.id}
        renderItem={({item}) => (
          <Button key={item.id} title={item.name} onPress={() => handleOnClickSection(item.id)} />
        )}
      />

    </View>
  )
})
