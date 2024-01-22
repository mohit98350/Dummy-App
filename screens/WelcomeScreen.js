import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("home"), 2500);
  }, []);
  return (
    <View className="flex-1 justify-center  items-center space-y-5 ">
      <StatusBar style="light" />
      <View>
        <Image
          source={require("../assets/Images/khanabook.png")}
          //   style={{ width: 300, height: 40 }}
          style={{ width: hp(43), height: hp(5.7) }}
        />
      </View>

      {/* title and punchline */}
      <View className="flex items-center  ">
        <Text
          style={{ fontSize: hp(1.5) }}
          className=" text-neutral-500 tracking-widest "
        >
          Stay Healthy, Stay Fit
        </Text>
      </View>
    </View>
  );
}
