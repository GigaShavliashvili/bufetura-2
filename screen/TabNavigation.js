import React, { useEffect, useLayoutEffect } from 'react'
import {View,Text, TouchableOpacity,Image, Pressable,SafeAreaView} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import CartScreen from './CartScreen';
import SafeViewAndroid from "../component/SafeAreaView";
import { LinearGradient } from "expo-linear-gradient";

const TabNavigation = ({navigation}) => {

  const Tab = createBottomTabNavigator();


  return ( 
     <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
{/*   <Pressable onPress={() =>{
    navigation.navigate("drawer")
  }}><Text className="mt-10 text-lg text-neutral-200 " >Giga</Text></Pressable> */}
    <Tab.Navigator initialRouteName="product"  screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown:false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
            backgroundColor:'white',
            borderTopLeftRadius:40,
            position:"absolute",
            bottom:0,
            borderTopRightRadius:40,
            height:"10%",
          },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'product') {
            iconName = "home";
          } else if (route.name === 'notifications') {
            iconName = "notifications"
          } else if(route.name === 'cart'){
            iconName = "cart"
          }else if(route.name === 'profile'){
            iconName = "eye"
          }
          else if(route.name === 'search'){
            iconName = "search"
          }

          // You can return any component that you like here!`
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7F73E3',
        tabBarInactiveTintColor: 'gray',

      })}>
        <Tab.Screen  name="product" component={ProductScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />

 {/*         <Tab.Screen name={"ActionButton"} component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              
                    <LinearGradient
      style={{
        width: 75,
        height: 75,
        borderRadius: 100,
        justifyContent: 'center',
        overflow:"hidden",
        alignItems: 'center',
        marginBottom:45,
      }}
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.9, y: 1 }}
        colors={["#3D3486", "#7F73E3"]}
      >
               <Ionicons name={"search"} size={35} color={"white"} />
               </LinearGradient>

              
            </TouchableOpacity>
          )
        }}></Tab.Screen> */}
        <Tab.Screen name="notifications" component={NotificationScreen }/>
        <Tab.Screen name="cart" component={CartScreen} />
    </Tab.Navigator>

    </SafeAreaView>

  )
}

export default TabNavigation