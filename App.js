import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import AddProduct from './screens/AddProduct';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />      
    </NavigationContainer>
    // <AddProduct/>
  );
}

const styles = StyleSheet.create({
  
});
