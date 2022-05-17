import { StyleSheet } from 'react-native';

import Navigator from './routes/appStack';
import BottomTabs from './routes/bottomTabsNavigator';
import Sidebar from './screens/sidebar';

export default function App() {
  return (
      // <Navigator/>
      // <Sidebar/>
      <BottomTabs/>
  );
}

const styles = StyleSheet.create({
  
});
