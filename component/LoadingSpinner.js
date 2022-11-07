
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

export const Loading = ({theme = 'white', size = 'large', }) => {
  const color = theme === 'white' ? 'white' : '#fff';



  return (
    <View
    className="bg-stone-900/40"
      style={{
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <ActivityIndicator size={size} color={color} />
        <Text className="text-lg text-main-color">იტვირთება...</Text>
    </View>
  );
};