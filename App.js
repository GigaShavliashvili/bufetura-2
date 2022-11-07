
import Navigation from "./Navigation";
/* import {AuthProvider} from "./context/authContext" */
import 'react-native-gesture-handler';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducer/store";
let store = createStore(rootReducer);

export default function App() {


  return (
  
      <Provider store={store}>
<Navigation/>
</Provider>
  );
}


