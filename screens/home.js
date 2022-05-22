import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Our E-commerce App" />
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#FBEFEF',
        height: '100%',        
        // justifyContent: 'center',
        alignItems: 'center',
    },
});