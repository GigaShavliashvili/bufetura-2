import React from "react";
import { Pressable, Text, View } from "react-native";
const TransparentButton = ({ text, press }) => {
  return (
    <Pressable className="mt-4" onPress={press ? press : null}>
      <Text
        style={{ backgroundColor: "rgba(255, 255, 255, 0.21);" }}
        className="text-white  text-xl  p-4 w-80 text-center rounded-full border-2 border-white"
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default TransparentButton;
