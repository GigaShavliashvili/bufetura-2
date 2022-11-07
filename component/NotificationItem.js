import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import MainButton from "./MainButton";
import { LinearGradient } from "expo-linear-gradient";
const NotificationItem = ({ universityName, orderInfo }) => {
  return (
    <View className="flex flex-row items-center justify-around gap-x-3  py-4 border-t-4 border-main-color/30 ">
      <View className="">
        <Image source={require("../assets/UG.png")} />
      </View>
      <View className="flex-1">
        <Text className=" text-neutral-300 font-semibold text-lg" >
          {universityName}
        </Text>

        <View className="flex flex-row itmes-center justify-between mt-2 gap-x-2">
          <View>
            <Text className="text-neutral-600">1x ბურეგერი - 1x ყავა</Text>
            <Text className="text-neutral-600">ფასი: 8.30ლ</Text>
          </View>
          <Button />
        </View>
      </View>
    </View>
  );
};

const Button = () => {
  return (
    <Pressable>
      <LinearGradient
        className=" w-32 h-8 mx-2 items-center justify-center rounded-full"
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.9, y: 1 }}
        colors={["#3D3486", "#7F73E3"]}
      >
        <Text className="text-white text-sm self-center overflow-hidden ">
          თავიდან შეკვეთა
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default NotificationItem;
