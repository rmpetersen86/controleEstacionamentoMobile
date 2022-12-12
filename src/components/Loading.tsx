import { ActivityIndicator, Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { useFonts, Rubik_700Bold } from "@expo-google-fonts/rubik";

export function Loading() {
  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
  });
  if (!fontsLoaded) return null;
  return (
    <View className="flex-1 bg-indigo-500 items-center justify-center px-5">
      <ActivityIndicator size={"large"} color={colors.indigo[600]} />
      <Text className="text-indigo-200 text-xl font-Rubik700">
        Carregando...
      </Text>
    </View>
  );
}
