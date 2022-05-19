import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/login";
import SignUp from "../screens/signup";

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }
  
export default AuthStack;