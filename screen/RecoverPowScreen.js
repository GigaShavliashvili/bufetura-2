import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import SafeViewAndroid from "../component/SafeAreaView";
import CustomInput from "../component/CustomInput";
import MainButton from "../component/MainButton";
import Elipses from "../component/Elipses";

const RecoverPowScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Elipses />
      <View className="flex items-center justify-center h-full">
        <View className="w-10/12">
          <View style={{ width: "85%" }}>
            <Text className="text-main-color font-semibold text-4xl mb-2">
              ახალი პაროლი
            </Text>
          </View>

          <View style={{ width: "85%" }}>
            <Text className="text-neutral-300 flex w-65">
              ჩაწერეთ ახალი პაროლი და ეცადეთ აღარ დაგავიწყდეთ :დ
            </Text>
          </View>
        </View>

        <View className="w-10/12 mt-5 mb-5">
          <CustomInput
            label="ახალი პაროლი"
            placeholder="ერთივარდისფერივარდი"
            value={password}
            setValue={setPassword}
            secureTexts={true}
          />
        </View>

        <MainButton
          text="გაგრძელება"
          press={() => {
            navigation.navigate("login");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RecoverPowScreen;
