import React, { useEffect, useLayoutEffect, useState,useContext } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import SafeViewAndroid from "../component/SafeAreaView";
import CustomInput from "../component/CustomInput";
import MainButton from "../component/MainButton";
import Elipses from "../component/Elipses";
import { Loading } from "../component/LoadingSpinner";
import ValidationErrorText from "../component/ValidationErrorText";
import { useDispatch } from "react-redux";
import { login } from "../services/auth";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch()
 /*  const {isLoading, login} = useContext(AuthContext); */
 
 
 useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    console.log("login page");
  }, []);

  const handlerLogin = (email, password) => {
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          setIsLoading(false);
          dispatch({
            type: "USER__AUTH",
            payload: res.data.token,
          });
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
 /*      login(email,password) */

  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Elipses />

      {isLoading ? <Loading /> : null}

      <View className="flex items-center justify-center h-full gap-5 ">
        <View className="w-10/12">
          <Text className="text-main-color font-semibold text-4xl">
            ავტორიზაცია
          </Text>
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
        <Text className="text-main-color">დაგავიწყდა პაროლიდ?</Text>
        <View>
          <MainButton
            text="ავტორიზაცია"
            press={() => {
              handlerLogin(email, password);
            }}
          />
        </View>
       {/*  <ValidationErrorText validationText={error} /> */}
        <Pressable
          className="flex flex-row"
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text className="text-neutral-300">არ გაქვს ანგარიში?</Text>
          <Text className="text-main-color">გაიარე ავტორიზაცია</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
