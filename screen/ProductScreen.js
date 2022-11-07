import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect } from "react";
import AllProducts from "../component/AllProduct";
import ProductDetail from "../component/ProductDetail";
import { getProducts } from "../services/product";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
const ProductScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <AllProducts/>
   /*  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="allproduct" component={AllProducts} />
      <Stack.Screen name="productdetails" component={ProductDetail} />
    </Stack.Navigator>
    </NavigationContainer> */
  );
};

export default ProductScreen;
