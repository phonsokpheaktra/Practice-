import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import axios from '../axios';
import DropDownPicker from 'react-native-dropdown-picker';
import Spacing from '../components/Spacing';

export default function HeaderButton() {
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
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

    const validation = () => {
        if (name === '') {
            Alert.alert('Product Name Missing!', 'Please Your Product Name...');
            return;
        }
        if (quantity === null) {
            Alert.alert('Quantity Missing!', 'Please enter quantity');
            return;
        }        
    }

    const postProduct = async () => {
        validation();
        axios.post('/api/product/create_product', {
            product_name: name,
            quantity: Number(quantity),
            price: Number(price),
            categoryId: category,
            description: description
        })
        .then(res => {
            Alert.alert('Success!', res.data.message);
            console.log(res.data);
            setModalVisible(!modalVisible);
            reload();
        })
    };

    const AddProductForm = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.box}>
                        <Spacing height={20}/>
                        <Text style={styles.title}>
                            Add New Product
                        </Text>
                        <Spacing height={10}/>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Product Name..." value={name} onChangeText={text => setName(text)}/>
                        </View>
                        <View style={[styles.inputContainer, {zIndex: 1, padding: 0, borderWidth: 0}]}>                    
                            <DropDownPicker
                                placeholder='Select Category'
                                open={open}
                                value={category}
                                items={items}
                                setOpen={setOpen}
                                setValue={setCategory}
                                setItems={setItems}                        
                                containerStyle={{
                                    width: "100%",
                                }}
                            />  
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Quantity..." value={quantity} onChangeText={text => setQuantity(text)}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Price..." value={price} onChangeText={text => setPrice(text)}/>
                        </View>                
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Description..." value={description} onChangeText={text => setDescription(text)}/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={[styles.button, {backgroundColor: 'white', borderWidth: 1, borderColor: 'red'}]} onPress={() => {setModalVisible(!modalVisible);}}>
                                <Text style={[styles.buttonText, {color: 'red'}]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, {backgroundColor: 'green',}]} onPress={() => {postProduct(); }}>
                                <Text style={[styles.buttonText, {color: 'white'}]}>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <Spacing height={20}/>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>
                    Add Product
                </Text>            
            </TouchableOpacity>
            <AddProductForm />
        </View>
    )
}

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: 'transparent',        
        paddingRight: 10,
    },
    buttonText: {
        color: '#1c1c1e',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',    
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
        // height: 480,
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
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#666',
        padding: 9,
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
    // buttonText: {
    //     textAlign: 'center',
    //     color: 'white',
    //     fontWeight: 'bold',
    // },
});