import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SeparatorLine from '../components/SeparatorLine';
import Spacing from '../components/Spacing';

export default function MyCart() {
    const [subTotal, setSubTotal] = useState(5);
    const [tax, setTax] = useState(0);
    const [shippingFee, setShippingFee] = useState(5);
    const [total, setTotal] = useState(subTotal + tax + shippingFee);

    const price = [
        {
            title: 'Sub Total',
            value: subTotal,
        },
        {
            title: 'Tax',
            value: tax,
        },
        {
            title: 'Shipping Fee',
            value: shippingFee,
        },
    ];

    // useEffect(() => {
    //     setTotal(subTotal + tax + shippingFee);    
    // }, []);

    return (
        <View style={styles.container}>
            <Spacing height={10}/>
            <View style={styles.priceContainer}>
                {price.map((item, index) => {
                    return (
                        <View style={styles.priceRow} key={index}>
                            <Text style={styles.priceTitle}>{item.title}</Text>
                            <Text style={styles.priceValue}>$ {item.value}</Text>
                        </View>
                    );                    
                })}
                <SeparatorLine margin={5}/>
                <View style={styles.priceRow}>
                    <Text style={[styles.priceTitle, {fontSize: 16}]}>Total</Text>
                    <Text style={[styles.priceValue, {fontSize: 16}]}>$ {total}</Text>
                </View>
            </View>
            <Spacing height={20}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBEFEF",
    },
    priceContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 350,
    },
    priceRow: {
        flexDirection: "row",
        marginBottom: 5,
    },
    priceTitle: {
        flex: 3,
        paddingLeft: 15,
    },
    priceValue: {
        flex: 1,
    },
    button: {        
        backgroundColor: "#FF9C9C",        
        borderRadius: 8,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "500",
    },
})