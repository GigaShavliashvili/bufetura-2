import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
  try {
    const user = await AsyncStorage.getItem("userInfo");
    return JSON.parse(user).token;
  } catch (err) {
    console.log("user dont found in localStorage");
  }
};
