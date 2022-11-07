import React, { useLayoutEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {  DrawerActions,NavigationContainer } from "@react-navigation/native";
import RecoverPowScreen from "./RecoverPowScreen";
import SearchScreen from "./SearchScreen";
import TabNavigation from "./TabNavigation";
import { Pressable, Text, View, Button } from "react-native";
import { useEffect } from "react";
import CustomDrawer from "../component/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import OrderList from "./OrderList";
import { useNavigation } from "@react-navigation/native";
/* import OrderList from './OrderList'; */

const DrawerNavigation = ({ navigation, route }) => {
  const Drawer = createDrawerNavigator();
  console.log("you ar drawer screen");

const nav = useNavigation()
  
  return (
  
    <Drawer.Navigator
 initialRouteName="myOrders"
/*  useLegacyImplementation */
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#121010",
          height: 50,
        },
          itemsContainerStyle: {
            marginVertical: 0,  
          },
   /*      drawerStyle: {
          backgroundColor: "#121010",
          width: "100%",
        }, */

        drawerIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "myOrders") {
            iconName = "list-circle-sharp";
          } else if (route.name === "myCards") {
            iconName = "wallet";
          } else if (route.name === "conntact") {
            iconName = "help";
          }

          // You can return any component that you like here!`
          return <Ionicons name={iconName} size={35} color={color} />;
        },
        drawerActiveTintColor: "#7F73E3",
        drawerInactiveTintColor: "#9796A1",
      })}
    >
      <Drawer.Screen
        name="TabNavigation"

        component={TabNavigation}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerItemStyle: { height: 0 },
          headerTitle: (props) => <Pressable onPress={() =>{
            navigation.openDrawer() 
            console.log("gogaa");
          }}><Text className="text-xl text-slate-200" >menu</Text></Pressable> 
        }}

      />

      <Drawer.Screen
        name="myOrders"
        options={{ drawerLabel: "ჩემი შეკვეთები" }}
        component={OrderList}
      />

      <Drawer.Screen
        name="myCards"
        options={{ drawerLabel: "გადახდის მეთოდები" }}
        component={RecoverPowScreen}
      />

      <Drawer.Screen
        name="conntact"
        options={{ drawerLabel: "ჩვენთან კავშირი" }}
        component={SearchScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
