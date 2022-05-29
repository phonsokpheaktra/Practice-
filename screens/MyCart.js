import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";

export default function MyCart() {
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [total, setTotal] = useState(0);

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
        {
            title: 'Total',
            value: total,
        },
    ];

    return (
        <View style={styles.container}>
            <Text>MyCart</Text>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBEFEF",
    },
})