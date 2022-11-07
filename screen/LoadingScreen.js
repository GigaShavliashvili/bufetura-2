
import React, { useLayoutEffect } from 'react';
import {View, ActivityIndicator, StyleSheet,Image} from 'react-native';

const LoadingScreen = ({theme = 'white', size = 'large', navigation}) => {
  const color = theme === 'white' ? 'white' : '#fff';

 useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown: false,
  });
 },[])
 

  return (
    <View
    className="bg-stone-900"
      style={{
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <Image source={require("../assets/landingLogo.png")} style={{width:90, height:90, marginBottom:15}}/>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default LoadingScreen