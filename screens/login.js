import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';

export default function Login() {
    const navigation = useNavigation();
    const goToSignUpScreen = () => {
        navigation.navigate('SignUp');
    };
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Sign in
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={text => setEmail(text)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Password..." secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text)}/>
                    <Pressable onPress={handlePasswordVisibility}>
                        <Ionicons name={rightIcon} size={22} color="#232323" />
                    </Pressable>
                </View>                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.authContainer}>
                    <Text>or sign in with:</Text>
                    <Image style={styles.logo} source={require('../assets/logo/icons8-google.svg')} />
                    <Image style={styles.facebook} source={require('../assets/logo/icons8-facebook.svg')} />
                </View>
                <View style={styles.authContainer}>
                    <Text style={styles.link}>
                        Forgot Password?
                    </Text>
                    <Text style={styles.link} onPress={goToSignUpScreen}>
                        Sign Up
                    </Text>
                </View>                
            </View>
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
        height: 320,
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer:{
        width: '80%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#666',
        padding: 8,
        margin: 10,
    },
    input: {
        width: '90%'
    },
    button: {
        justifyContent: 'center',
        width: 120,
        height: 40,
        backgroundColor: '#FF9C9C',
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    authContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    logo: {
        marginLeft: 10,
        height: 30,
        width: 30,
    },
    facebook: {
        marginLeft: 10,
        height: 35,
        width: 35,
    },
    linkContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    link: {
        textDecorationLine: 'underline',
        paddingEnd: 10,
    }
});