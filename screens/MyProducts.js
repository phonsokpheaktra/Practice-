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
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={[styles.actionRow, {backgroundColor: "orange"}]} onPress={() => showConfirmDialog(product)}>
                            {/* <Ionicons name="pencil-sharp" size={20} color="white" /> */}
                            <Text style={styles.actionText}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionRow, {backgroundColor: "#FF3f3f"}]} onPress={() => showConfirmDialog(product)}>
                            {/* <Ionicons name="trash" size={20} color="white" /> */}
                            <Text style={styles.actionText}>Delete</Text>
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
        justifyContent: "space-evenly",
    },
    actionContainer: {
        // flex: 1,
        alignItems: "stretch",
        justifyContent: "space-around",
    },
    actionRow: {
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    actionText: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
});