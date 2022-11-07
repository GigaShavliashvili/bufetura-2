import React from 'react'
import {View, Text} from "react-native"
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import UserAvatar from './UserAvatar'
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
const CustomDrawer = (props) => {

    const fullName= "გიგა შავლიაშვილი"
    const mail = "shavliashvili33@gmail.com"

  return (
    <View className="flex-1">
   <DrawerContentScrollView {...props}>
   <View className="p-4">
      <UserAvatar fullName={fullName} mail={mail} position="items-start"/>
    </View>
    <View>
        <DrawerItemList {...props} />

        </View>
    </DrawerContentScrollView>
<View className="bottom-8 left-6">
<LinearGradient

        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.9, y: 1 }}
        colors={["#3D3486", "#7F73E3"]}
        className="flex flex-row items-center w-32 justify-center rounded-full p-1"
      >
    <Text className="self-center"> 
    <Ionicons name={"power"} size={30} color={"white"} />
   </Text>
    <Text className="text-neutral-200 text-base text-center  ">გამოსვლა</Text>
               </LinearGradient>
</View>
    </View>
 
  )
}

export default CustomDrawer