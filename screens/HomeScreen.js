import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Swiper from "react-native-deck-swiper";
import { ChevronDoubleRightIcon } from "react-native-heroicons/outline";
import { FontAwesome } from "@expo/vector-icons";
const swiperRef = React.createRef();

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <View
        style={{
          backgroundColor: "#3e953e",
          height: "32%",
          borderBottomLeftRadius: 33,
          borderBottomRightRadius: 32,
        }}
        className="relative"
      >
        <View className=" w-full absolute flex-row justify-between items-center pt-12 ">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold text-white tracking-widest p-2 ml-3 mt-8"
          >
            Discover
          </Text>
          <TouchableOpacity className=" rounded-full  p-2 mr-3 mt-8 bg-white">
            <ChevronDoubleRightIcon size={hp(3)} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
        }}
        className="absolute"
      >
        <Swiper
          cards={[
            "Brocolli",
            "Toamto",
            "Spinach",
            "Cabbage",
            "Beetroot",
            "Brocolli",
            "Toamto",
            "Spinach",
            "Cabbage",
            "Beetroot",
          ]}
          renderCard={(card) => {
            return <Card card={card} />;
          }}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          ref={swiperRef}
          cardIndex={0}
          stackSize={4}
          stackScale={10}
          stackSeparation={30}
          disableBottomSwipe
          disableTopSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          backgroundColor="transparent"
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "red",
                  color: "white",
                  fontSize: 18,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "green",
                  color: "white",
                  fontSize: 18,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
      {/* card Detail */}
      <View
        style={{
          flex: 0.4,

          justifyContent: "space-evenly",
        }}
        className="absolute inset-x-0 bottom-0 space-y-7"
      >
        <View className="items-center">
          <Text
            style={{ fontSize: hp(7) }}
            className="font-semibold text-neutral-400 tracking-widest"
          >
            Brocolli
          </Text>
          <Text
            style={{ fontSize: hp(2.5) }}
            className=" text-neutral-400 tracking-widest"
          >
            "fat" : "12"
          </Text>
          <Text
            style={{ fontSize: hp(2.5) }}
            className="text-neutral-400 tracking-widest"
          >
            "colestrol" : "121"
          </Text>
        </View>
        <View className="flex-row justify-evenly mb-5">
          <FontAwesome
            name="thumbs-o-up"
            size={80}
            color={"#5a5a5a"}
            onPress={() => swiperRef.current.swipeRight()}
          />

          <FontAwesome
            name="thumbs-o-down"
            size={80}
            color={"#5a5a5a"}
            onPress={() => swiperRef.current.swipeLeft()}
          />
        </View>
      </View>
    </View>
  );
}
