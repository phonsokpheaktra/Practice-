import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import Login from './screens/login';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    // <Navigator/>
      // <View style={styles.container}>
      //   <Header/>
      //   <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
      <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 40,
    color: 'blue',
    textAlign: 'center',
  }
});
