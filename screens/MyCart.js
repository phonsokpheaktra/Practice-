import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SeparatorLine from '../components/SeparatorLine';
import Spacing from '../components/Spacing';

export default function MyCart() {    
    const [subTotal, setSubTotal] = useState(5);
    const [tax, setTax] = useState(0);
    const [shippingFee, setShippingFee] = useState(5);
    const [total, setTotal] = useState(subTotal + tax + shippingFee);

    const products = [
        {
          title: 'Nike Air Max',
          category: 'Footwear',
          tag: ['Nike', 'Air Max', 'Fashion', 'Shoes'],
          price: '$120',
          user: 'Nike Store',
          imageLink: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
        },
        {
          title: 'iPhone 13 Mini',
          category: 'Electronics',
          tag: ['Apple', 'iPhone', '13', 'Mini'],
          price: '$1360',
          user: 'Nike Store',
          imageLink: 'https://rewardmobile.co.uk/wp-content/uploads/2021/09/iPhone13_ProductImage_1000x1000_1.jpg',
        },
        {
          title: 'KOOMPI E13',
          category: 'Electronics',
          tag: ['KOOMPI', 'E13', 'Electronics'],
          price: '$270',
          user: 'Nike Store',
          imageLink: 'https://konfulononline.com/image/cache/catalog/KOOMPI/KOOMPI%20E13/E13-RoseGold3-800px-800x800.png',
        },
        {
          title: 'PlayStation 5',
          category: 'Electronics',
          tag: ['PlayStation', '5', 'Red Dragon'],
          price: '$505',
          user: 'Nike Store',
          imageLink: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Fsony-playstation-5-pro-release-rumors-info-000.jpg?w=960&cbr=1&q=90&fit=max',
        },
    ];

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

    return (
        <View style={styles.container}>
            <Spacing height={10}/>
            {products.map((product, index) => {
                return (
                    <View style={styles.cartProduct} key={index}>                
                        <Image style={styles.productImage} source={{uri: product.imageLink}}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.priceRow}>{product.title}</Text>
                            <Text style={styles.priceRow}>{product.price}</Text>
                            <View style={[styles.priceRow, {alignItems: 'center'}]}>
                                <Ionicons name="remove-circle" size={24} color="#FF9C9C" style={{marginRight: 10}} />
                                <Text>1</Text>
                                <Ionicons name="add-circle" size={24} color="#FF9C9C" style={{marginLeft: 10}}/>
                            </View>
                        </View>
                        <View style={styles.deleteContainer}>
                            <TouchableOpacity style={styles.deleteIcon}>
                                <Ionicons name="trash" size={30} color="white" />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                );
            })}            
            <Spacing height={5}/>
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
    cartProductList: {
        // marginBottom: 5,
        // justifyContent: "center",
    },
    cartProduct: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 5,
        marginBottom: 5,
        borderRadius: 10,
        width: 320,
    },
    productImage: {  
        // flex: 1,      
        width: 80,
        height: 100,
        borderRadius: 10,
    },
    productInfo: {        
        // flex: 4,
        marginLeft: 10,
        width: 120,
    },
    deleteContainer: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    deleteIcon: {
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: "#FF3f3f",
    },
    rowBack: {
        height: '100%',
        // marginBottom: 5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    iconContainer: {
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4F4F',
    },
    priceContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 320,
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