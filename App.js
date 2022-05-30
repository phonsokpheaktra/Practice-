import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import BottomTabs from './routes/TabsNavigator';
import SearchFilter from './screens/SearchFilter';
import ProductDetail from './screens/ProductDetail';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />      
    </NavigationContainer>      
    // <SearchFilter/>
    // <ProductDetail/>
  );
}

const styles = StyleSheet.create({
  
});
