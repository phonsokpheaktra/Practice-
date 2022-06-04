import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sidebar from '../screens/sidebar';
import EditProfile from '../screens/EditProfile';
import MyProducts from '../screens/MyProducts';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sidebar" component={Sidebar} options={{headerBackVisible: false}}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyProducts" component={MyProducts} />
    </Stack.Navigator>
  );
}
export default ProfileStack;