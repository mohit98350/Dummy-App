import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/solid";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CardImage({ card }) {
  return (
    <View
      className=" mt-20 flex justify-center items-center rounded-full"
      style={{
        flex: 0.6,
      }}
    >
      <Image
        source={require("../assets/Images/1.jpg")}
        style={{
          width: wp(85),
          height: hp(53),
          borderRadius: 13,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          marginTop: 5,
          flex: 1,
          objectFit: "fill",
        }}
      />
    </View>
  );
}
