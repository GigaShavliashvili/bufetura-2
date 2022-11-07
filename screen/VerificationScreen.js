import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import SafeViewAndroid from "../component/SafeAreaView";
import CustomInput from "../component/CustomInput";
import MainButton from "../component/MainButton";
import Elipses from "../component/Elipses";
import ConfirmationField from "../component/confrimationFields/ConfirmationField";
const VerificationScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  // if all input is fill compate the code
  useEffect(() => {
    if (otp[1] != "" && otp[2] != "" && otp[3] != "" && otp[4] != "") {
      const code = otp[1] + otp[2] + otp[3] + otp[4];
      console.log(code);
      navigation.navigate("recoverPow");
    }
  }, [otp]);

  const user = route.params.user;


  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Elipses />
      <View className="flex items-center justify-center h-full gap-6 ">
        <View style={{ width: "85%" }}>
          <Text className="text-main-color font-semibold text-4xl">
            ვერიფიკაციის კოდი
          </Text>
        </View>
        <View style={{ width: "85%" }}>
          <Text className="text-neutral-300 flex w-65">
            შეამოწმეთ კოდი რომელიც გამოგიგზავნეთ {user ? user.mail : "მეილ"}{" "}
            _ზე.
          </Text>
        </View>

        <View>
          <ConfirmationField setValue={setOtp} value={otp} />
        </View>

        {/* <MainButton text="ავტორიზაცია" press={() =>{
    navigation.navigate("home")
}}/> */}
        <Pressable
          className="flex flex-row"
          onPress={() => {
            navigation.navigate("register");
          }}
        >
          <Text className="text-neutral-300">არ მოგივიდათ კოდი?</Text>
          <Text className="text-main-color">თავიდან გამოაგზავნეთ</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;
