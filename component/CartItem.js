import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CartItem = ({ foodName, foodPrice, quentity, img }) => {
  return (
    <View className="bg-main-color h-24 flex self-center mt-4 rounded-xl overflow-hidden  w-80 flex-row">
      <View className="w-2/5 mr-5">
        <Image className=" top-2 right-2" source={img ? img : ""} />
      </View>
      <View className="py-1">
        <Text className="text-2xl text-neutral-300 ">{foodName}</Text>
        <Text className="text-lg text-neutral-300">{foodPrice} ლარი</Text>
        <View className="flex mt-1 flex-row">
          <TouchableOpacity className="p-3 bg-main-black rounded-full">
            <Text className="text-white bottom-3 text-2xl">-</Text>
          </TouchableOpacity>
          <Text className="text-2xl mx-5  text-neutral-300">{quentity}</Text>
          <TouchableOpacity className="p-3 bg-main-black  rounded-full">
            <Text className="text-white  bottom-3 text-2xl">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
