import React from "react";

import { Image, View } from "react-native";

const Elipses = () => {
  return (
    <View className="w-full h-full absolute" >
      <Image
        source={require("../assets/Ellipse126.png")}
        className="absolute top"
      />
      <Image
        source={require("../assets/Ellipse127.png")}
        className="absolute top"
      />
      <Image
        source={require("../assets/Ellipse128.png")}
        className="absolute top right-0"
      />
    </View>
  );
};

export default Elipses; 

