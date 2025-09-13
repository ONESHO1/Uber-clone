// PLEASE WORK PLSPLSPLSPLSPLS
import { useEffect } from "react";
import { router } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function OAuthCallback() {
  useEffect(() => {
    router.replace("/(root)/(tabs)/home");
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" />
    </View>
  );
}
