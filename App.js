import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import ProductView from './screens/ProductView';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />      
    </NavigationContainer>
    // <ProductView/>
  );
}

const styles = StyleSheet.create({
  
});
