import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SeparatorLine from '../components/SeparatorLine';
import Spacing from '../components/Spacing';
import axios from '../axios';

export default function MyCart() {
    const [products, setProducts] = useState([]);
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
    ];

    const getProducts = async () => {    
        await axios.get('/api/product/query_product')
            .then(res => {
                const allProducts = res.data;
                setProducts(allProducts);
                const sum = allProducts.reduce((a, b) => a + (b.price*b.quantity), 0);
                setSubTotal(limit2Decimal(sum));
                setTotal(limit2Decimal(sum + tax + shippingFee));
            })
            .catch(err => console.log(err));        
    };

    useEffect(() => {    
        getProducts();                        
    }, []);    

    const showConfirmDialog = (product) => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to remove this order?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                setProducts(products.filter(function(f) { return f !== product }));
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
        );
      };

    function limit2Decimal(value) {
        // return Math.round((value + Number.EPSILON) * 100) / 100;
        return Number(value.toFixed(2));
        // return Number(Math.round(value+'e2')+'e-2');
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: "#FBEFEF"}}>
        <View style={styles.container}>
            <Spacing height={10}/>
            {products.map((product, index) => {
                return (
                    <View style={styles.cartProduct} key={index}>                
                        <Image style={styles.productImage} source={{uri: product.image}}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.priceRow}>{product.name}</Text>
                            <Text style={styles.priceRow}>$ {product.price}</Text>
                            <View style={[styles.priceRow, {alignItems: 'center'}]}>
                                <Ionicons 
                                    name="remove-circle" 
                                    size={24} 
                                    color="#FF9C9C" 
                                    style={{marginRight: 10}} 
                                    onPress={() => {
                                        if (product.quantity > 1) {
                                            product.quantity -= 1;
                                            setSubTotal(limit2Decimal(subTotal - product.price));
                                            // setTax(tax - product.price * 0.05);
                                            // setShippingFee(shippingFee - 5);
                                            setTotal(limit2Decimal((subTotal - product.price) + tax + shippingFee));
                                        }                                                                            
                                    }}
                                />
                                <Text>{product.quantity}</Text>
                                <Ionicons 
                                    name="add-circle" 
                                    size={24} 
                                    color="#FF9C9C" 
                                    style={{marginLeft: 10}}
                                    onPress={() => {                                        
                                        product.quantity += 1;
                                        setSubTotal(limit2Decimal(subTotal + product.price));
                                        // setTax(tax + product.price * 0.05);
                                        // setShippingFee(shippingFee + 5);
                                        setTotal(limit2Decimal((subTotal + product.price) + tax + shippingFee));
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.deleteContainer}>
                            <TouchableOpacity style={styles.deleteIcon} onPress={() => showConfirmDialog(product)}>
                                <Ionicons name="trash" size={30} color="white" />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                );
            })}            
            <Spacing height={5}/>
            {total>=0 &&
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
            }                
            <Spacing height={20}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
        </View>
        <Spacing height={20}/>
        </ScrollView>
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