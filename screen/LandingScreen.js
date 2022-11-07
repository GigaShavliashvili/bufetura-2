import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../component/SafeAreaView";
import TransparentButton from "../component/TransparentButton";
import { LinearGradient } from "expo-linear-gradient";
const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      
      <ImageBackground
        source={require("../assets/landingbg.png")}
        className="h-full"
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0.0, y: 0.17 }}
          end={{ x: 0.5, y: 1 }}
          colors={["rgba(21, 22, 23, 0.5)", "#3D3486"]}
        >
          <View className="items-center justify-center h-full">
            <Image source={require("../assets/landingLogo.png")} />
            <Text className="text-4xl mt-5 mb-5 text-white text-center">
              მოგესალმებით ბუფეტურაში
            </Text>
            <View>
              <TransparentButton
                text="ავტორიზაცია"
                press={() => {
                  navigation.navigate("login");
                }}
              />

              <TransparentButton
                text="რეგისტრაცია"
                press={() => {
                  navigation.navigate("register");
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
