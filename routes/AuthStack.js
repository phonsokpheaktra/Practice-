import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/AuthStack/login";
import SignUp from "../screens/AuthStack/signup";
import Home from "../screens/Home";

import TabsNavigator from "./TabsNavigator";

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      </Stack.Navigator>
    );
  }
  
export default AuthStack;