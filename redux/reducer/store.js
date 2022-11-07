import { combineReducers } from "redux";
import { Authorization } from "./authReducer";


export const rootReducer = combineReducers({
  Auth: Authorization,
});