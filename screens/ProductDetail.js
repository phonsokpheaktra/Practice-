import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetail() {
    return (
        <View style={styles.container}>Product Detail</View>
    )
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#FBEFEF',
        height: '100%',        
        justifyContent: 'center',
        paddingTop: 40,
        alignItems: 'center',        
    },
});