import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const goToLogInScreen = () => {
        navigation.navigate('LogIn');
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Sign Up Screen
                </Text>
                <TextInput style={styles.input} placeholder="Username..." />
                <TextInput style={styles.input} placeholder="Email..." />
                <TextInput style={styles.input} placeholder="Password..." />
                <TextInput style={styles.input} placeholder="Confirm Password..." />
                <TouchableHighlight style={styles.button}>
                    <Button title="Get Started" />
                </TouchableHighlight>
                <Text style={styles.link} onPress={goToLogInScreen}>
                    Already have an account?
                </Text>
            </View>
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        height: 420,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 7,
        paddingStart: 10,
        margin: 10,
        width: '80%',
        borderRadius: 10,
    },
    button: {
        width: 120,
        height: 40,
        // backgroundColor: '#4286f4',
        marginTop: 10,
    },
    link: {
        textDecorationLine: 'underline',
        color: '#4286f4',
        marginTop: 10,
    }
});