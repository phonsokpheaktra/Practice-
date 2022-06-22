import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, Modal, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios';
import Spacing from "../components/Spacing";

export default function History() {
    const [modalData, setModalData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState('');

    const [ open, setOpen ] = useState(false);
    const [items, setItems] = useState([
        { label: 'Electronics', value: 1 },
        { label: 'Footwear', value: 2 },
        { label: 'Beauty', value: 3 },
        { label: 'Apparel', value: 4 },
        { label: 'Tableware', value: 5 },
        { label: 'Tools', value: 6 },
    ]);

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

    return (        
        <View style={styles.container}>
            <Spacing height={10}/>
        {products.map((product) => {
            return (
                <View style={styles.cartProduct} key={product.id}>                
                    <Image style={styles.productImage} source={{uri: product.image}}/>
                    <View style={styles.productInfo}>
                        <Text style={styles.priceRow}>{product.name}</Text>
                        <Text style={styles.priceRow}>Price: $ {product.price}</Text>                       
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    box: {
        backgroundColor: 'white',
        height: 420,
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#666',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer:{
        width: '80%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#666',
        padding: 8,
        margin: 10,
    },
    input: {
        width: '90%'
    },
    button: {
        justifyContent: 'center',
        width: 120,
        height: 40,        
        margin: 5,
        borderRadius: 10,
    },
    buttonText: {
        color: '#1c1c1e',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',    
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
});