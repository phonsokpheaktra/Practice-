import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Spacing from "../components/Spacing";

export default function MyProducts() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {    
        axios.get('http://localhost:3000/api/product/query_product')
            .then(res => {
              const allProducts = res.data;
              setProducts(allProducts);          
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {    
        getProducts();
    }, []);

    return (
        <View style={styles.container}>
            <Spacing height={10}/>
        {products.map((product, index) => {
            return (
                <View style={styles.cartProduct} key={index}>                
                    <Image style={styles.productImage} source={{uri: product.image}}/>
                    <View style={styles.productInfo}>
                        <Text style={styles.priceRow}>{product.name}</Text>
                        <Text style={styles.priceRow}>Price: $ {product.price}</Text>
                        <Text>Quantity: {product.quantity}</Text>
                    </View>
                    <View style={styles.deleteContainer}>
                        <TouchableOpacity style={styles.deleteIcon} onPress={() => showConfirmDialog(product)}>
                            <Ionicons name="trash" size={30} color="white" />
                        </TouchableOpacity>
                    </View>                        
                </View>
            );
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBEFEF",
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
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 10,
    },
});