import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";
import { View, Text, Image } from "react-native";
import GooglePlacesTextInput from "react-native-google-places-textinput";
import { withTiming } from "react-native-reanimated";

const googleplacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY ?? "";
console.log(googleplacesApiKey);

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-start justify-center relative z-50 rounded-2xl ${containerStyle} mb-1`}
  >
    <GooglePlacesTextInput
      fetchDetails={true}
      detailsFields={["formattedAddress", "location"]}
      apiKey={googleplacesApiKey}
      placeHolderText="Where do you want to go ?"
      onPlaceSelect={(place, sessionToken?) => {
        handlePress({
          latitude: place.details?.location.latitude,
          longitude: place.details?.location.longitude,
          address: place.details?.formattedAdress,
        });
        // TEST
        // console.log(place, sessionToken);
        console.log(
          place.details?.location.latitude,
          place.details?.location.longitude,
          place.details?.formattedAddress,
        );
      }}
      languageCode="en"
      includedRegionCodes={["IN"]}
      style={{
        container: {
          width: "100%",
          borderRadius: 20,
          marginHorizontal: 20,
          shadowColor: "#d4d4d4",
          // backgroundColor: "black",
        },
        input: {
          backgroundColor: textInputBackgroundColor || "white",
          fontSize: 16,
          fontWeight: "600",
          // marginTop: 5,
          width: "100%",
          borderRadius: 20,
        },
        suggestionsContainer: {
          backgroundColor: textInputBackgroundColor || "white",
          position: "relative",
          top: 0,
          width: "100%",
          borderRadius: 10,
          shadowColor: "#d4d4d4",
          zIndex: 99,
        },
        placeholder: {
          color: "gray",
        },
        loadingIndicator: {
          color: "gray",
        },
      }}
    />
  </View>
);

export default GoogleTextInput;
