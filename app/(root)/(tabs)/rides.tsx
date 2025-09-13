import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View, Image, Text, ActivityIndicator } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useFetch } from "@/lib/fetch";
import { images } from "@/constants";
import { Ride } from "@/types/type";
import RideCard from "@/components/RideCard";

const Rides = () => {
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );
  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <Text className="text-2xl font-JakartaBold my-5">All Rides</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
