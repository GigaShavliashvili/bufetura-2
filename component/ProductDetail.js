import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image,TouchableOpacity } from "react-native";
import SafeViewAndroid from "../component/SafeAreaView";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Elipses from "./Elipses";
const ProductDetail = ({ route, navigation }) => {
  const { productDetail } = route.params;
  console.log(productDetail);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Elipses/>
      <View className="justify-center flex-1 items-center">
        <View className="w-4/5 justify-center bg-neutral-200 rounded-lg px-4 py-2">

     
          <Image
            source={require("../assets/productDetail.png")}
            className="self-center absolute -top-1/4 mt-6"
          />


          <View style={{marginTop:"18%"}}>
            <Text className="text-main-color mt-4 text-4xl font-semibold text-center">
              ბურგერი
            </Text>
            <Text className="text-main-color mt-4 text-sm font-semibold text-center">
              შემადგენლობა: სერველადი ძეხვი, მდნარი ყველი, სალათის ფოთლები,
              პომიდორი, კიტრი, მოიონეზი, კეჩუპი, ბურგერის პურები
            </Text>
            <Text className="text-main-color mt-4 text-sm font-semibold text-center">
              დამატებითი ინფორმაცია: მინდიხართ, ჩამყლაპეთ...
            </Text>
            <Text className="text-main-color mt-4 text-2xl font-semibold text-center">
             ფასი:4.5₾
            </Text>
            <TouchableOpacity>
        <Text className="self-center mt-1">
   <Ionicons name={"add-circle"} size={50} color={"#7F73E3"} />
   </Text>
   </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
