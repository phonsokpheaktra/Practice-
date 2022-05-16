import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUp() {
    const navigation = useNavigation();
    const goToLogInScreen = () => {
        navigation.navigate('LogIn');
    };
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [ checkBox, setCheckBox] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Welcome!
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Username..." />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={text => setEmail(text)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="New Password..." secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text)}/>
                    <Pressable onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                    </Pressable>
                </View>                
                <BouncyCheckbox
                    style={styles.checkBox}
                    size={25}
                    fillColor="#FF9C9C"
                    unfillColor="#FFFFFF"
                    text="I agree to the Terms of Services and Privacy Policy"
                    // iconStyle={{ borderColor: "red" }}
                    textStyle={{ textDecorationLine: "none", }}
                    textContainerStyle = {{ flexDirection: 'row', flexShrink: 1, margin: 10,}}
                    onPress={ isChecked => setCheckBox(isChecked) }
                    value={checkBox}
                    />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.link} onPress={goToLogInScreen}>
                    Already have an account?
                </Text>
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
        height: 400,
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#999',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
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
        margin: 10,
    },
    input: {
        width: '90%'
    },
    checkBox: {
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
        fontWeight: 'bold',
    },
    link: {
        textDecorationLine: 'underline',
        marginTop: 10,
        color: '#757575',
    }
});