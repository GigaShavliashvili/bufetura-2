
import { ActionType } from "../actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
/* var token = null;
const res =AsyncStorage.getItem('user').then((res) =>{
console.log(res);
 return res
});
console.log(token, "our token"); */

const initilization = {
  accessToken:
    null
  }

export const Authorization = (state = initilization, action) => {
  switch (action.type) {
    case ActionType.USER__AUTH: {
      const token = action.payload;
      console.log(token);
      return { ...state, accessToken: token };
    }

    case ActionType.LOG__OUT: {
      console.log("removeee");
      AsyncStorage.removeItem("userInfo");
      return {
        ...state,
        accessToken: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};
