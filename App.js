import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './routes/TabsNavigator';
import Home from './screens/Home';

export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomTabs/>
    // </NavigationContainer>      
    <Home/>
  );
}

const styles = StyleSheet.create({
  
});
