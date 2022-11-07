import React from "react";
import { View, Text, Image, Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  return (

      <View className="m-1.5 bg-neutral-100 rounded-xl p-0.5 " style={{width:"30%"}}>
            <Pressable
      onPress={() => {
        navigation.navigate("productdetails", {productDetail:item});
      }}
    >
        <View className="">
          {/* <Image source={{
  uri:item.image,
}} style={{width:100, height:100}}/> */}
          <Image
            source={require("../assets/category.png")}
            className="self-center"
            /* style={{width:60, height:60}} */
          />
        </View >
        <View className="">
        <Text className="text-main-color font-semibold text-center" style={{fontSize:"15%"}}>{/* {item.name} */}ბურგერი</Text>
        </View>
   <Text className="self-center text-main-color absolute top-1 -left-1 font-semibold -rotate-45">{/* {item.price} */}4.5₾</Text>
        </Pressable>
        <TouchableOpacity>
        <Text className="self-center">
   <Ionicons name={"add-circle"} size={37} color={"#7F73E3"} />
   </Text>
   </TouchableOpacity>
      </View>
  );
};

export default ProductItem;
