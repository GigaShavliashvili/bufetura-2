
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import VerificationScreen from './screen/VerificationScreen';
import RecoverPowScreen from './screen/RecoverPowScreen';
import Home from "./screen/TabNavigation"
import { useEffect, useState,useContext } from 'react';
import { getAccessToken } from './utils/accessToken';
import { useSelector,useDispatch } from 'react-redux';
import LoadingScreen from './screen/LoadingScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './screen/SearchScreen';
 import DrawerNavigation from './screen/DrawerNavigation'; 

export default function Navigation() {

const [isLoading, setIsLoading] = useState(false) 


const Stack = createNativeStackNavigator()

const dispatch = useDispatch()
/* 
const {userInfo, splashLoading} = useContext(AuthContext);
console.log(userInfo); */



// finding jwt token in asynsStorage
useEffect(() =>{
setIsLoading(true)
  getAccessToken().then(token =>{
    setIsLoading(false)
 dispatch({
  type:"USER__AUTH",
  payload:token
 })
    }) 
},[])


const accessToken  = useSelector((state) => state.Auth.accessToken)
console.log(accessToken);



/* if(Loading){
  return <Text className="text-3xl text-main-color">\...იტვირთება</Text>
} */

  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator screenOptions={{
          headerShown:false,
      }}>

        {
          isLoading ? <Stack.Screen name="loading" component={LoadingScreen}/>  :
         accessToken ? ( 
          <>
          <Stack.Screen name="home" component={DrawerNavigation} />
          </>
          ) : ( 
            <>
            <Stack.Screen name="landing" component={LandingScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
       {/*    <Stack.Screen name="verification" component={VerificationScreen} />
          <Stack.Screen name="recoverPow" component={RecoverPowScreen} />  */}
          </> 
          )
        }
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


