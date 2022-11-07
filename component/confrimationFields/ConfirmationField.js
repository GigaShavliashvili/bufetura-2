import { View, TextInput } from "react-native";
import React, { useState, useRef, useEffect } from "react";

const ConfirmationField = ({ setValue, value }) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();

  return (
    <View className="flex justify-center flex-row gap-4 w-80">
      <TextInput
        className="bg-white rounded-lg w-14 h-14 p-3 text-center text-3xl"
        keyboardType="numeric"
        maxLength={1}
        value={value[1]}
        ref={firstInput}
        onChangeText={(text) => {
          setValue({ ...value, 1: text });
          text && secondInput.current.focus();
        }}
      />

      <TextInput
        className="bg-white rounded-lg w-14 h-14 text-center text-3xl"
        keyboardType="numeric"
        maxLength={1}
        ref={secondInput}
        value={value[2]}
        onChangeText={(text) => {
          setValue({ ...value, 2: text });
          text ? thirdInput.current.focus() : firstInput.current.focus();
        }}
      />

      <TextInput
        className="bg-white rounded-lg w-14 h-14 text-center text-3xl"
        keyboardType="numeric"
        maxLength={1}
        ref={thirdInput}
        value={value[3]}
        onChangeText={(text) => {
          setValue({ ...value, 3: text });
          text ? fourInput.current.focus() : secondInput.current.focus();
        }}
      />

      <TextInput
        className="bg-white rounded-lg w-14 h-14 text-center text-3xl"
        keyboardType="numeric"
        maxLength={1}
        ref={fourInput}
        value={value[4]}
        onChangeText={(text) => {
          setValue({ ...value, 4: text });
          !text && thirdInput.current.focus();
        }}
      />
    </View>
  );
};

export default ConfirmationField;
