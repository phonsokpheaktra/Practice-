import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Sidebar() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.profile} source={require('../assets/images/screen.jpg')}></Image>
                <View>
                    <Text style={styles.name}>Masha Masha</Text>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="camera" size={20} color="white" />
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>            
                </View>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menuRow}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="notifications" size={20} color="#FF9C9C" />
                    </View>                    
                    <Text>Notification</Text>
                </View>
                <View style={styles.menuRow}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="moon" size={20} color="#FF9C9C" />
                    </View>                    
                    <Text>Dark Mode</Text>
                </View>
                <View style={styles.menuRow}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="person" size={20} color="#FF9C9C" />
                    </View>                    
                    <Text>Account Setting</Text>
                </View>
                <View style={styles.spacing}></View>
                <View style={styles.menuRow}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="bookmark" size={20} color="#FF9C9C" />
                    </View>                    
                    <Text>Saved Products</Text>
                </View>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#FBEFEF',
        height: '100%',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    profile: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        width: 110,
        // height: 25,
        backgroundColor: '#FF9C9C',
        marginTop: 10,
        padding: 3,
        paddingLeft: 15,
        paddingRight: 15,        
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        // fontWeight: 'bold',
    },
    menuContainer: {
        width: '95%',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    menuIcon: {
        marginRight: 10,
        padding: 3,
        borderRadius: 4,
        shadowColor: '#666',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,        
        backgroundColor: '#FBEFEF',
    },
    spacing: {
        height: 10,
    },
})