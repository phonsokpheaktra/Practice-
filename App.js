import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import MyCart from './screens/MyCart';

export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthStack />      
    // </NavigationContainer>
    <MyCart/>
  );
}

const styles = StyleSheet.create({
  
});
