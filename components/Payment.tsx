import { PaymentProps } from "@/types/type";
import CustomButton from "./CustomButton";
import { useLocationStore } from "@/store";
import { useAuth } from "@clerk/clerk-expo";
import { fetchAPI } from "@/lib/fetch";
import ReactNativeModal from "react-native-modal";
import { useState } from "react";
import { View, Image, Text } from "react-native";
import { images } from "@/constants";
import { router } from "expo-router";

const Payment = ({
  fullName,
  email,
  amount,
  driverId,
  rideTime,
}: PaymentProps) => {
  const [success, setSuccess] = useState(false);

  const {
    userAddress,
    userLatitude,
    userLongitude,
    destinationAddress,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const { userId } = useAuth();

  // I HAVE NOT ADDED STRIPE PAYMENT
  const openPaymentSheet = async ({
    driverId,
    rideTime,
    amount,
    setSuccess,
  }: {
    driverId: number;
    rideTime: number;
    amount: string;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    try {
      await fetchAPI("/(api)/ride/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          origin_address: userAddress,
          destination_address: destinationAddress,
          origin_latitude: userLatitude,
          origin_longitude: userLongitude,
          destination_latitude: destinationLatitude,
          destination_longitude: destinationLongitude,
          ride_time: rideTime.toFixed(0),
          fare_price: parseInt(amount) * 100,
          payment_status: "paid",
          driver_id: driverId,
          user_id: userId,
        }),
      });
      setSuccess(true);
    } catch (error) {
      console.log("Payment creation failed:", error);
    }
  };

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-7"
        onPress={() =>
          openPaymentSheet({ driverId, rideTime, amount, setSuccess })
        }
      />
      <ReactNativeModal
        isVisible={success}
        onBackButtonPress={() => setSuccess(false)}
      >
        <View className="flex flex-col items-center justify-center bg-white p-7 rounded-2xl">
          <Image source={images.check} className="w-28 h-28 mt-5" />
          <Text className="text-2xl text-center font-JakartaBold mt-5">
            Ride Booked
          </Text>

          <Text className="text-md text-general-200 font-JakartaMedium text-center mt-3">
            Thank you for your booking. Your reservation has been placed. Please
            proceed with your trip !
          </Text>

          <CustomButton
            title="Back Home"
            onPress={() => {
              setSuccess(false);
              router.push("/(root)/(tabs)/home");
            }}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Payment;
