import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import SafeViewAndroid from "../component/SafeAreaView";

import Elipses from "../component/Elipses";
import CustomInput from "../component/CustomInput";
import MainButton from "../component/MainButton";
import {register} from "../services/auth"
import { Loading } from "../component/LoadingSpinner";
import ValidationErrorText from "../component/ValidationErrorText";

const RegisterScreen = ({navigation}) => {

  const [username, setUsernmae] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comparePassword, setComparePassword] = useState("")
  const [isLoading, setIsLoadin] = useState(false)
  const [error, setError] = useState()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    
  }, []);


const handlerAuthentication = (username, email, password, comparePassowrd) =>{
  setError("")
if(password === comparePassowrd){
  setIsLoadin(true)
  register(username, email, password).then((res) =>{
    if(res.status == 200){
      navigation.navigate("login")
      setIsLoadin(false)
    }
  }).catch((error) =>{
    console.log(error);
    setError(error)
    setIsLoadin(false)
  })
}
}




  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>

      <Elipses />

      {
        isLoading ? <Loading/> : null
      }
      <View className="flex items-center justify-between  pt-20 pb-5 h-full">
        <View className="w-10/12">
          <Text className="text-main-color font-semibold text-4xl">
            რეგისტრაციად
          </Text>
        </View>

        <View className="w-10/12">
          <CustomInput
            label="სრული სახელი"
            placeholder="წიოკა ლექსო"
            value={username}
            setValue={setUsernmae}
          />
        </View>

        <View className="w-10/12">
          <CustomInput
            label="იმეილი"
            placeholder="shavliashvili@gmail.com"
            value={email}
            setValue={setEmail}
          />
        </View>

        <View className="w-10/12">
          <CustomInput
            label="პაროლი"
            placeholder="თქვენი პაროლი"
            value={password}
            setValue={setPassword}
            secureTexts={true}
          />
        </View>

        <View className="w-10/12">
          <CustomInput
            label="გაიმეორეთ პაროლი"
            placeholder="თქვენი პაროლი"
            value={comparePassword}
            setValue={setComparePassword}
            secureTexts={true}
          />
        </View>
        <MainButton
          text="რეგისტრაცია"
          press={() => {
            // sent the user resgitration data to the back
            handlerAuthentication(username,email,password,comparePassword)
          }}
        />

      
    <ValidationErrorText validationText={error} />
        <Pressable
          className="flex flex-row "
          onPress={() => {
            navigation.navigate("login");
        
          }}
        >
          
          <Text className="text-neutral-300">გაქვს უკვე ანგარიში?</Text>
          <Text className="text-main-color">გაიარე ავტორიზაცია</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
