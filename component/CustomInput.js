import React from "react";
import { View, Text, TextInput } from "react-native";
const CustomInput = ({ label, placeholder, value, setValue, secureTexts }) => {
  return (
    <>
      <Text className="pb-1 text-base  text-main-color">{label}</Text>
      <TextInput
        onChangeText={(e) => setValue(e)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="rgba(127, 115, 227, 0.27)"
        secureTextEntry={secureTexts}
        className="w-full h-16 bg-transpatent text-base px-4 rounded-xl  text-white border border-main-color"
      />
    </>
  );
};

export default CustomInput;
