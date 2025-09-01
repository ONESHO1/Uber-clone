import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GooglePlacesTextInput from "react-native-google-places-textinput";

const handlePlaceSelect = (place: any) => {
  console.log("Selected place:", place);
};

const googleplacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY ?? "";

const Rides = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GooglePlacesTextInput
        apiKey={googleplacesApiKey}
        onPlaceSelect={handlePlaceSelect}
      />
    </SafeAreaView>
  );
};

export default Rides;
