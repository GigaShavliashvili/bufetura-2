import React from 'react'
import {View, Text} from "react-native"
const Notification = ({text,time}) => {
  return (
    <View className="w-80 py-2 rounded-xl self-center bg-main-color mt-4">
        <Text className="self-center text-lg text-neutral-300">{text}</Text>
        <Text className="self-center text-sm text-neutral-300">{time}</Text>
    </View>
  )
}

export default Notification