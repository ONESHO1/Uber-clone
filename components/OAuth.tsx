import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";
import { router } from "expo-router";
import { useSSO } from "@clerk/clerk-expo";
import { useCallback } from "react";
import * as AuthSession from "expo-auth-session";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { fetchAPI } from "@/lib/fetch";

const OAuth = () => {
  useWarmUpBrowser();

  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: AuthSession.makeRedirectUri({
          scheme: "uberclone",
          path: "/oauth-callback",
        }),
      });

      if (createdSessionId) {
        console.log("yes");
        // Activate session
        await setActive!({
          session: createdSessionId,
        });

        // Extract user info from the OAuth flow
        const userInfo = signIn?.userData;
        const name =
          `${userInfo?.firstName || ""} ${userInfo?.lastName || ""}`.trim();
        // TODO: Change ts
        const email = "test@gmail.com";

        // Save to backend
        if (name && email) {
          await fetchAPI("/(api)/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              clerkId: createdSessionId,
            }),
          });
        }
        // console.log("yes");
        router.push("/(root)/(tabs)/home");
      } else {
        console.warn(
          "No session created. Handle MFA or other flows if needed.",
        );
      }
    } catch (err) {
      console.error("OAuth error:", JSON.stringify(err, null, 2));
    }
  }, [startSSOFlow]);

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Log in with Google"
        className="mt-5 p-2.5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
