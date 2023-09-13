import { observer } from "mobx-react-lite"
import { HomeTabScreenProps } from "../HomeNavigator"
import { Box, HStack, IconButton, VStack } from "native-base";
import { Heading, Text } from "@/components/ui";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { greeting } from "@/lib";
import { AntDesign } from "@expo/vector-icons";
import { useCallback } from "react";
import theme from "@/theme";
import { FavoriteInfoView } from "@/components";
import { SpeakingInfoView } from "@/components/Speaking";

interface WellcomeScreenProps extends HomeTabScreenProps<"Wellcome"> {}

export const WellcomeScreen = observer(function(props: WellcomeScreenProps) {
  const { navigation } = props;
  const insets = useSafeAreaInsets()

  const handleNavigateMoreSection = useCallback(() => {
    navigation.navigate("SectionList")
  }, [])

  const handleNavigateMoreListItem = useCallback((id: string) => {
    navigation.navigate("ListItem", { fav: false, section_id: id })
  }, [])

  const handleNavigateMoreFavorite = useCallback(() => {
    navigation.navigate("ListItem", { fav: true })
  }, [])

  const handleNavigateMoreMusic = useCallback(() => {
    navigation.navigate("Music")
  }, [])

  return <ScrollView>
    <Box pt={insets.top + 20}>
      <VStack alignItems="start" px={6} justifyContent="start" space="lg">
        <VStack space="xs">
          <Box py={4} my={2}>
            <Heading fontSize="2xl" letterSpacing="xs" text={greeting()} />
            <Text fontSize="lg" lineHeight="xs" text="There are a few new words to learn today. Explore and memorize!" />
          </Box>
        </VStack>

        <VStack space="xs">
          <HStack alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl" letterSpacing="xs" text="Speaking" />
            <IconButton 
              name="see-more"
              _icon={{
                as: AntDesign,
                name: "arrowright",
                color: theme.colors.primary[600],
              }}
              // _ios
              onPress={handleNavigateMoreSection}
            />
          </HStack>
          {/* Horiontal list -> message thought */}
          <SpeakingInfoView navigate={handleNavigateMoreListItem} />
        </VStack>

        <VStack space="xs">
          <HStack alignItems="center" justifyContent="space-between">
            <Heading fontSize="2xl" letterSpacing="xs" text="My favorite list" />
            <IconButton 
              name="see-more"
              _icon={{
                as: AntDesign,
                name: "arrowright",
                color: theme.colors.primary[600],
              }}
              // _ios
              onPress={handleNavigateMoreFavorite}
            />
          </HStack>
          {/* Horiontal list -> pineapple */}
          <FavoriteInfoView navigate={() => navigation.navigate("ListItem", { fav: true })} />
        </VStack>

        <VStack space="xs">
          <HStack alignItems="center" justifyContent="space-between">
            <Heading fontSize="2xl" letterSpacing="xs" text="Featured videos" />
            <IconButton 
              name="see-more"
              _icon={{
                as: AntDesign,
                name: "arrowright",
                color: theme.colors.primary[600],
              }}
              // _ios
              onPress={handleNavigateMoreMusic}
            />
          </HStack>
          {/* Horiontal list -> earphone */}
        </VStack>
      </VStack>
    </Box>
  </ScrollView>
})
