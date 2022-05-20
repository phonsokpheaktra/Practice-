import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <Image style={styles.profile} source={require('../assets/images/midoriya.jpg')}></Image>
            <View style={styles.subContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEFEF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        // marginLeft: 10,    
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: -75,
        borderWidth: 5,
        borderColor: 'white',
    },
    subContainer: {
        width: '95%',
        height: '70%',
        backgroundColor: 'white',
        padding: 10,        
        borderRadius: 10,
        shadowColor: '#999',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        zIndex: -1,
    },
});