import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#FBEFEF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});