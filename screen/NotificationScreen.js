import React, { useLayoutEffect } from "react";
import { View, Text, FlatList,SafeAreaView, Image, ScrollView } from "react-native";
import UserAvatar from "../component/UserAvatar";
import SafeViewAndroid from "../component/SafeAreaView";
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationItem from "../component/NotificationItem";
import Notification from "../component/Notification";
const NotificationScreen = ({navigation}) => {


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);


  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
<Text className="self-center text-neutral-300  text-2xl mt-5">ნოთიფიკაცია</Text>
<Image source={require("../assets/selectiedline.png")} className="self-center mt-1 w-16"/>
<ScrollView className="mt-3" contentContainerStyle={{
          paddingTop: 10,
        }}>
          <Notification text="თქვენი შეკვეთა მზადაა." time="ამ წამს"/>
  <Notification text="თქვენი შეკვეთა მიღებულია." time="2 წუთის წინ"/>
  <Notification text="თქვენი შეკვეთა მზადაა." time="ამ წამს"/>
  <Notification text="თქვენი შეკვეთა მიღებულია" time="2 წუთის წინ"/>
  <Notification text="თქვენი შეკვეთა მზადაა." time="ამ წამს"/>
  <Notification text="თქვენი შეკვეთა მიღებულია" time="2 წუთის წინ"/>
  <Notification text="თქვენი შეკვეთა მზადაა." time="ამ წამს"/>
  <Notification text="თქვენი შეკვეთა მიღებულია" time="2 წუთის წინ"/>
  <Notification text="თქვენი შეკვეთა მზადაა." time="ამ წამს"/>
  <Notification text="თქვენი შეკვეთა მიღებულია" time="2 წუთის წინ"/>

</ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
