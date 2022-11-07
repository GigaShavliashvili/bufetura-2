/* import axios from '../config/axsiosClient'; */
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* const baseURL = "http://172.18.1.217:5000"; // university wlan ip */
const baseURL = "http://192.168.0.105:5000"; // home wlan ip

export const register = async (username, email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: baseURL + "/api/v1/register",
      data: { username: username, email: email, password: password },
    });
    return res;
  } catch (error) {
    const msg =
      (error.response && error.response.data && error.response.data.msg) ||
      error.msg ||
      error.toString();
    throw msg;
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(baseURL + "/api/v1/login", {
      email,
      password,
    });
    if (res.data.token) {
      console.log("gooooo");
      await AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
    }
    console.log(res, "success");
    return res;
  } catch (error) {
    console.log(error);
    const msg =
      (error.response && error.response.data && error.response.data.msg) ||
      error.msg ||
      error.toString();
    throw msg;
  }
};

/* export const logout = () => {
  AsyncStorage.removeItem("user");
};
 */