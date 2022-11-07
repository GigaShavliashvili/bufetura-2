import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import UserAvatar from "../component/UserAvatar";
import SafeViewAndroid from "../component/SafeAreaView";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationItem from "../component/NotificationItem";

const OrderList = () => {
  const fullName = "გიგა შავლიაშვილი";
  const mail = "shavliashvili33@gmail.com";

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="pt-5 ">
        <UserAvatar fullName={fullName} mail={mail} position="items-center" />
      </View>

      <View className="pt-3 flex flex-row items-center justify-center">
        <Ionicons
          name={"list-circle-sharp"}
          color="rgba(151, 150, 161, 0.4)
"
          size={35}
        />
        <Text className="mx-3 text-neutral-300 " style={{}}>
          ჩემი შეკვეთები
        </Text>
      </View>
      <ScrollView className="w-11/12 self-center" 
       contentContainerStyle={{ paddingBottom: 20}}
       showsVerticalScrollIndicator={false}
      >
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
        <NotificationItem universityName={"საქართველოს უნივერსიტეტი"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderList;
