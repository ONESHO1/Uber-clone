import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();

  // TEST
  // console.log("find-ride", destinationAddress);
  //

  return (
    <RideLayout>
      <Text className="text-2xl">Find Ride</Text>
    </RideLayout>
  );
};

export default FindRide;
