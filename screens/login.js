import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const goToSignUpScreen = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Sign In
                </Text>
                <TextInput style={styles.input} placeholder="Email..." />
                <TextInput style={styles.input} placeholder="Password..." secureTextEntry />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.link} onPress={goToSignUpScreen}>
                    Sign Up
                </Text>
            </View>
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEFEF',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        height: 300,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#666',
        padding: 7,
        margin: 10,
        width: '80%',
    },
    button: {
        justifyContent: 'center',
        width: 120,
        height: 40,
        backgroundColor: '#FF9C9C',
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
    },
    link: {
        textDecorationLine: 'underline',
        // color: '#FF9C9C',
        marginTop: 10,
    }
});