import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/login";
import SignUp from "../screens/signup";

const Stack = createNativeStackNavigator();

function appStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={Login} options={{headerLeft: (props) => null }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerBackVisible: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default appStack;