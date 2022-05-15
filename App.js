import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    // <Navigator/>
    <View>
      <Header/>
      <View style={styles.container}>        
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 40,
    color: 'blue',
  }
});
