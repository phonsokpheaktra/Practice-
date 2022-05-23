import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>E-commerce Application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 64,
        // paddingTop: 40,
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0.5 },
        shadowRadius: 1,
        shadowColor: 'rgb(216, 216, 216)',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#1c1c1e',        
    }
});