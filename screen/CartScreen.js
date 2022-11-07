import React,{useLayoutEffect} from 'react'
import {View, Text, ScrollView, SafeAreaView} from "react-native"
import SafeViewAndroid from "../component/SafeAreaView"
import CartItem from '../component/CartItem'
import MainButton from '../component/MainButton'

const CartScreen = ({navigation}) => {






  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="h-2/3">
    <ScrollView className="mt-4" contentContainerStyle={{
      paddingTop: 15,
    }}>
       <CartItem foodName={"სალათი"} foodPrice={1.30} quentity={1} img={require("../assets/food1.png")}/>
       <CartItem foodName={"ყავა"} foodPrice={4.5} quentity={3} img={require("../assets/food2.png")}/>
       <CartItem foodName={"ნამცხვარი"} foodPrice={2} quentity={2} img={require("../assets/food3.png")}/>
    </ScrollView>
    </View>
    <View className="w-80  self-center mt-2 flex flex-row justify-between">
      <Text className="text-2xl text-neutral-300">ჯამი:</Text>
      <Text className="text-2xl text-main-color">8.5ლ</Text>
    </View>
    <View className="w-80 self-center  mt-4">
    <MainButton text="შეკვეთა"/>
    </View>
 
    </SafeAreaView>
  )
}

export default CartScreen