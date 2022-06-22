import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar() {
    const navigation = useNavigation();
    const [notification, setNotification] = useState('');
    const [darkMode, setDarkMode] = useState('');

    const productList = [
        {
            icon: 'bookmark',
            title: 'History',
            route: 'History',
        },
        {
            icon: 'basket',
            title: 'Sale Products',
            route: 'MyProducts',
        }
    ];
    const optionList = [
        {
            icon: 'alert-circle',
            title: 'Report a Problem',
            route: 'LogIn',
        },
        {
            icon: 'help-circle',
            title: 'Help',
            route: 'LogIn',
        },
        {
            icon: 'power',
            title: 'Log Out',
            route: 'LogIn',
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex: 2}}>
                    <Image style={styles.profile} source={require('../assets/images/midoriya.jpg')}></Image>
                </View>                
                <View style={{flex: 3}}>
                    <Text style={styles.name}>Masha Masha</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                        <Ionicons name="camera" size={20} color="white" />
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>                    
                </View>
                <Ionicons style={{flex: 1}} name="chevron-forward" size={24} color="#767577" onPress={() => navigation.navigate('EditProfile')}/>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menuRow}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.menuIcon}>
                            <Ionicons name="notifications" size={20} color="#FF9C9C" />
                        </View>
                    </View>                    
                    <Text style={styles.menuText}>Notification</Text>
                    <View style={styles.menuAction}>
                        <Switch                            
                            value={notification}
                            onValueChange={() => setNotification(previousState => !previousState)}
                            trackColor={{ false: "#767577", true: "#FF9C9C" }}
                            thumbColor={"#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"                        
                        />
                    </View>                    
                </View>
                <View style={styles.menuRow}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.menuIcon}>
                            <Ionicons name="moon" size={20} color="#FF9C9C" />
                        </View>                    
                    </View>                    
                    <Text style={styles.menuText}>Dark Mode</Text>
                    <View style={styles.menuAction}>
                        <Switch                        
                            value={darkMode}
                            onValueChange={() => setDarkMode(previousState => !previousState)}
                            trackColor={{ false: "#767577", true: "#FF9C9C" }}
                            thumbColor={"#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"                        
                        />
                    </View>                    
                </View>
                <View style={styles.menuRow}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.menuIcon}>
                            <Ionicons name="person" size={20} color="#FF9C9C" />
                        </View>              
                    </View>        
                    <Text style={styles.menuText}>Account Setting</Text>
                    <View style={styles.menuAction}>
                        <Ionicons name="chevron-forward" size={24} color="#767577" />
                    </View>                    
                </View>
                <View style={styles.spacing}></View>                
                {productList.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.menuRow} key={index} onPress={() => navigation.navigate(item.route)}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.menuIcon}>
                                    <Ionicons name={item.icon} size={20} color="#FF9C9C" />
                                </View>                    
                            </View>                    
                            <Text style={styles.menuText}>{item.title}</Text>
                            <View style={styles.menuAction}>
                                <Ionicons name="chevron-forward" size={24} color="#767577" />
                            </View>    
                        </TouchableOpacity>
                    )
                })}
                <View style={styles.spacing}></View>
                {optionList.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.menuRow} key={index} onPress={() => navigation.navigate(item.route)}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.menuIcon}>
                                    <Ionicons name={item.icon} size={20} color="#FF9C9C" />
                                </View>                    
                            </View>                    
                            <Text style={styles.menuText}>{item.title}</Text>
                            <View style={styles.menuAction}>
                                <Ionicons name="chevron-forward" size={24} color="#767577" />
                            </View>    
                        </TouchableOpacity>
                    )
                })}
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
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
        marginLeft: 10,    
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
        width: 120,
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
        height: 440,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
    },
    menuRow: {        
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    menuIcon: {        
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',        
        borderRadius: 4,
        shadowColor: '#666',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,        
        backgroundColor: '#FBEFEF',
    },
    menuText: {
        flex: 5,
    },
    menuAction: {
        flex: 1,        
        alignItems: 'center',
    },
    spacing: {
        height: 10,
    },
})