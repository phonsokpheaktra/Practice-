import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import {FAB} from 'react-native-paper';

export default function ProductDetail({ route, navigation }) {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.pic} source={{ uri: route.params.image }}></Image>
            <Text style={styles.baseText}>
                {/* iPhone 12 and Mini */}
                {route.params.name}
            </Text>
            <Text style={styles.newtext}>
                {route.params.description}
                {/* The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. 
                The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340×1080 pixels and a pixel density of about 476 ppi. */}
            </Text>
            <Text style={styles.colortext}>Color:</Text>
            <View style={styles.groupcolor}>
                <Image style={styles.purple} source={require('../assets/images/iphone.jpg')} />
                <Image style={styles.black} source={require('../assets/images/iphoneblack.jpg')} />
                <Image style={styles.white} source={require('../assets/images/iphonewhite.jpg')} />
                <Image style={styles.green} source={require('../assets/images/iphonegreen.jpg')} />
            </View>
            <Text style={styles.internaltext}>Internal: </Text>
            <View style={styles.buttontype}>
                <Button title="32GB"/>
                <Button title="64GB"/>
                <Button title="128GB"/>
                <Button title="256GB"/>
            </View>
            <Text style={styles.quantity}>Quantity: </Text>
            <Text style={styles.count}>{route.params.quantity}</Text>
            <FAB
                style={styles.fabi}
                small
                icon="plus"
                onPress={increment}
            />
            <FAB
                style={styles.fabm}
                small
                icon="minus"
                onPress={decrement}
            />
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
    pic: {
        height: 150,
        width: 150,
        marginBottom: 450,
        right: '2%',
        left: '2%',
    },
    baseText: {
        fontSize: 18,
        fontWeight: 'bold', 
        color: '#FF9C9C', 
        position: 'absolute',
        top: '33%',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        position: 'absolute',
        top: '5%',
        left: '5%',
    },
    newtext: {
        fontSize: 15,
        position: 'absolute',
        top: '40%',
        left: '5%',
        right: '5%',
    },
    colortext: {
        fontSize: 15,
        position: 'absolute',
        top: '60%',
        left: '5%',
    },
    groupcolor: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        top: '58%',
        right: '11%',
        padding: 50,
    },
    purple: {
        height: 40,
        width: 40,
    },
    black: {
        height: 40,
        width: 40,
    },
    white: {
        height: 40,
        width: 40,
    },
    green: {
        height: 40,
        width: 40,
    },
    internaltext: {
        fontSize: 15,
        position: 'absolute',
        top: '73%',
        left: '5%',
    },
    buttontype: {
        top: '80%',
        position: 'absolute',
        left: '10%',
        borderColor: "#FF9C9C",
        borderWidth: "2px",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    quantity: {
        fontSize: 15,
        position: 'absolute',
        top: '85%',
        left: '5%',
    },
    fabi: {
        position: 'absolute',
        margin: 16,
        right: 290,
        bottom: 40,
        backgroundColor: "#FF9C9C",
    },
    count: {
        position: 'absolute',
        margin: 16,
        fontSize: 20,
        right: 260,
        bottom: 50,
        color: "#00000", 
    },
    fabm: {
        position: 'absolute',
        margin: 16,
        right: 200,
        bottom: 40,
        backgroundColor: "#FF9C9C",
    }

});