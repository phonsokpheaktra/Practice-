import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './routes/TabsNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  
});
