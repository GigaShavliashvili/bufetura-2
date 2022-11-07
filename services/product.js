import axios from "axios";
/* const baseURL = "http://172.18.1.217:5000"; // university  ip */
const baseURL = "http://192.168.0.105:5000"; // home  ip

export const getProducts = async (accessToken) => {
return axios({
    url:baseURL + '/api/v1/user/foods', 
    method:"GET",
headers:{
    Authorization : `Bearer ${accessToken}`
}
   }).then((res) =>{
   return res.data
   }).catch((err) =>{
    console.log(err);
   })
  };



/*   export const login = async (email, password) => {
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
  }; */