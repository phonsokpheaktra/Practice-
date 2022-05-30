import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchFilter from '../screens/SearchFilter';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchFilter} options={{headerBackVisible: false}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
export default SearchStack;