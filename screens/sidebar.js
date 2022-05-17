import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sidebar() {
    return (
        <View style={styles.container}>
            <Text>Hello Darkness</Text>
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
})