import React from 'react'
import {View, Text, Image} from "react-native"
const UserAvatar = ({fullName,mail, position}) => {
  return (
<View className={`flex ${position}`} >
<Image source={require("../assets/avatar.png")}  className="rounded-full  border-2  border-white "/>
<Text className="text-neutral-300 text-xl mt-1">{fullName}</Text>
<Text className="text-neutral-500 text-sm ">{mail}</Text>
</View>
  )
}

export default UserAvatar