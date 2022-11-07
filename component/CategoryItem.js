import React from 'react'
import {View,Text, Image} from "react-native"
const CategoryItem = ({img, name}) => {
  return (
    <View className="bg-neutral-100 p-2 relative rounded-2xl mx-1.5 " style={{width:"15%"}}>
      <Image source={img}  
        style={{width:"100%"}} 
        className="self-center absolute  bottom-3/4"
        /> 

<View className="h-10  mt-5 justify-center">
<Text style={{lineHeight:23}} className="text-main-color text-center  font-semibold  text-xl">{name}</Text>
</View>

    </View>

  )
}

export default CategoryItem