import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerBackVisible: false}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
export default HomeStack;