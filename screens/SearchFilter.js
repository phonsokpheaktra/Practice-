import { StyleSheet, View, Text } from "react-native";

export default function SearchFilter() {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEFEF',
        height: '100%',        
        justifyContent: 'center',
        paddingTop: 10,
        alignItems: 'center',
    },
});