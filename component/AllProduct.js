import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import CategoryItem from "../component/CategoryItem";
import SafeViewAndroid from "../component/SafeAreaView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import { getProducts } from "../services/product";
import ProductItem from "./ProductItem";
const AllProducts = ({ navigation }) => {
  const dispatch = useDispatch();

/*   useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    });
  }, []); */


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const accessToken = useSelector((state) => state.Auth.accessToken);

  useEffect(() => {
    getProducts(accessToken).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
       showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 35,
          paddingEnd:150,
        }}
        horizontal
      >
        {/*      {data.slice(200).map((item, index) => {
          return ( */}
        <CategoryItem img={require("../assets/category.png")} name="ბურგერი"/>
        <CategoryItem img={require("../assets/category2.png")} name="სალათი"/>
        <CategoryItem img={require("../assets/category3.png")} name="სასმელებ"/>
        <CategoryItem img={require("../assets/category.png")} name="ზუკაკო"/>
        <CategoryItem img={require("../assets/category2.png")} name="ბიტი"/>
        <CategoryItem img={require("../assets/category3.png")} name="სულხანი"/>
        <CategoryItem img={require("../assets/category.png")} name="ქსელები"/>

        {/*         );
        })} */}
      </ScrollView>

      <View style={{ flex: "100%", marginTop: 15, alignItems: "center",  }}>
        <FlatList
         contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
          data={data.slice(190)}
          renderItem={({ item }) => {
            return <ProductItem item={item} />;
          }}
          keyExtractor={(item) => item._id}
          numColumns={3}
        />
{/*         <Pressable
          onPress={() => {
            console.log("log out button");
            dispatch({
              type: "LOG__OUT",
            });
          }}
        >
          <Text className="text-zinc-200 text-2xl">Log Out</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

export default AllProducts;
