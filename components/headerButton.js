import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HeaderButton() {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => alert('This is a button!')}
        >
            <Text style={styles.buttonText}>
                Add Product
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',        
        paddingRight: 10,
    },
    buttonText: {
        color: '#1c1c1e',
        fontSize: 18,
        fontWeight: '500',        
    },
});