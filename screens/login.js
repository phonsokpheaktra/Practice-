import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
                    Sign In
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={text => setEmail(text)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Password..." secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text)}/>
                    <Pressable onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                    </Pressable>
                </View>                
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
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center',
    },
    inputContainer:{
        // backgroundColor: 'white',
        width: '80%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#666',
        padding: 8,
        // paddingLeft: 10,
        margin: 10,
    },
    input: {
        // padding: 14,
        // fontSize: 22,
        width: '90%'
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
        marginTop: 10,
    }
});