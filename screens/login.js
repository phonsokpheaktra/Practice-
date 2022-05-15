import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Login Screen
                </Text>
                <TextInput style={styles.input} placeholder="Email..." />
                <TextInput style={styles.input} placeholder="Password..." />
                <TouchableHighlight style={styles.button}>
                    <Button title="Login" />
                </TouchableHighlight>
                <Text style={styles.link}>Sign Up</Text>
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
        height: '40%',
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
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