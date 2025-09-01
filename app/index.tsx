// import { Redirect } from "expo-router";
// import { View, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useAuth } from "@clerk/clerk-expo";

// const Home = () => {
//   const { isSignedIn } = useAuth();

//   if (isSignedIn) {
//     return <Redirect href="/(root)/(tabs)/home" />;
//   }

//   return <Redirect href="/(auth)/welcome" />;
// };

// export default Home;

import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { View, ActivityIndicator } from "react-native";

const Index = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    // while Clerk restores the session from SecureStore
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Index;
