import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image, ImageSourcePropType } from "react-native";
import "react-native-reanimated";

// TODO: Change the mt-9 and make it work with flexbox
const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`w-12 h-12 mt-9 rounded-full items-center justify-center ${
      focused ? "bg-green-500" : ""
    }`}
  >
    <Image
      source={source}
      tintColor="white"
      resizeMode="contain"
      className="w-7 h-7"
    />
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        marginBottom: 20,
        marginHorizontal: 20,
        height: 78,
        backgroundColor: "#333333",
        borderRadius: 50,
        paddingBottom: 0,
        paddingTop: 0,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      },
      tabBarItemStyle: {
        justifyContent: "center",
        alignItems: "center",
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="rides"
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;
