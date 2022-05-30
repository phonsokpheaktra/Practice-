import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyCart from '../screens/MyCart';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyCart" component={MyCart} options={{headerBackVisible: false}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}