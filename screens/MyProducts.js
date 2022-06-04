import { StyleSheet, View, Text } from "react-native";

export default function MyProducts() {
    return (
        <View style={styles.container}>
            <Text>MyProducts Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBEFEF",
        justifyContent: "center",
        alignItems: "center",
    }
});