import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './routes/AuthStack';
import BottomTabs from './routes/TabsNavigator';
import EditProfile from './screens/EditProfile';

export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthStack />      
    // </NavigationContainer>      
    <EditProfile/>
  );
}

const styles = StyleSheet.create({
  
});
