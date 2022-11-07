/* import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabNavigator = ({children}) => {

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator     screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
            backgroundColor:'white',
            borderTopLeftRadius:40,
            position:"absolute",
            bottom:0,
            borderTopRightRadius:40,
            height:70,
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

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7F73E3',
        tabBarInactiveTintColor: 'gray',

      })}>{children}</Tab.Navigator>
  )
}

export default TabNavigator */