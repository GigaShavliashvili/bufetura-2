import React from "react";
import { Pressable, Text,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const MainButton = ({ text, press }) => {
  return (
    <TouchableOpacity>
    <Pressable onPress={press ? press : null}>
      <LinearGradient
        className=" p-4 w-80 h-15 text-center rounded-full"
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.9, y: 1 }}
        colors={["#3D3486", "#7F73E3"]}
      >
        <Text className="text-white text-xl self-center font-bold overflow-hidden ">
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
    </TouchableOpacity>
  );
};

export default MainButton;
