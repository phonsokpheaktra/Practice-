import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import BottomTabs from './routes/TabsNavigator';
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <BottomTabs/> */}
    </NavigationContainer>      
    // <Home/>
  );
}

const styles = StyleSheet.create({
  
});
