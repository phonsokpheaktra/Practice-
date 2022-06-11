import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Alert, Button } from 'react-native';
import axios from '../axios';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form'

export default function HeaderButton() {
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

    // const postProduct = async () => {
    //     if (!name && !quantity && !price && !category && !description) {
    //         return;
    //     }
    //     axios.post('/api/product/create_product', {
    //         product_name: name,
    //         quantity: quantity,
    //         price: price,
    //         categoryId: category,
    //         description: description
    //     })
    //     .then(res => {
    //         Alert.alert('Success!', res.data.message);            
    //         console.log(res.data)
    //     })
    // };

    const {        
        control, 
        handleSubmit, 
        formState: { errors }
      } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            category: 0,
        }
      })
      
    const onSubmit = (data) => {
        console.log(data);
        console.log('onSubmit Working')
    }

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
                        <Text style={styles.title}>
                            Add Product
                        </Text>
                        <Controller
                            control={control}                            
                            render={({field: {onChange, onBlur, value }}) => (
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input} 
                                        placeholder="Product Name..." 
                                        onBlur={onBlur}
                                        value={value} 
                                        onChangeText={onChange}/>
                                </View>
                            )}                            
                            rules={{ 
                                required: {
                                    value: true,
                                    message: 'Field is required!'
                                } 
                            }}
                            name="name"
                        /> 
                        {errors.name && <Text>This is required.</Text>}                        

                        <Controller
                            control={control}                            
                            render={({field: {onChange, onBlur, value }}) => (
                                <View style={styles.inputContainer}>
                                    <DropDownPicker
                                        placeholder='Select Category'
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={onChange}
                                        setItems={setItems}                        
                                        containerStyle={{
                                            width: 160,
                                            marginBottom: -6,
                                        }}
                                    />
                                </View>
                            )}                            
                            rules={{ 
                                required: {
                                    value: true,
                                    message: 'Field is required!'
                                } 
                            }}
                            name="category"
                        />

                        <Controller
                            control={control}                            
                            render={({field: {onChange, onBlur, value }}) => (
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input} 
                                        placeholder="Product Price..." 
                                        onBlur={onBlur}
                                        value={value} 
                                        onChangeText={onChange}/>
                                </View>
                            )}                            
                            rules={{ 
                                required: {
                                    value: true,
                                    message: 'Field is required!'
                                } 
                            }}
                            name="price"
                        />

                        <Controller
                            control={control}                            
                            render={({field: {onChange, onBlur, value }}) => (
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input} 
                                        placeholder="Product Quantity..." 
                                        onBlur={onBlur}
                                        value={value} 
                                        onChangeText={onChange}/>
                                </View>
                            )}                            
                            rules={{ 
                                required: {
                                    value: true,
                                    message: 'Field is required!'
                                } 
                            }}
                            name="quantity"
                        />

                        <Controller
                            control={control}                            
                            render={({field: {onChange, onBlur, value }}) => (
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input} 
                                        placeholder="Product Description..." 
                                        onBlur={onBlur}
                                        value={value} 
                                        onChangeText={onChange}/>
                                </View>
                            )}                            
                            rules={{ 
                                required: {
                                    value: true,
                                    message: 'Field is required!'
                                } 
                            }}
                            name="description"
                        />

                        {/* Buttons */}
                        {/* <View style={{flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={[styles.button, {backgroundColor: 'white', borderWidth: 2, borderColor: 'red'}]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={[styles.buttonText, {color: 'red'}]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, {backgroundColor: 'green',}]} onPress={() => handleSubmit(onSubmit())}>
                                <Text style={[styles.buttonText, {color: 'white'}]}>Add Product</Text>
                            </TouchableOpacity>
                        </View>  */}
                        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
        height: 480,
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
    // buttonText: {
    //     textAlign: 'center',
    //     color: 'white',
    //     fontWeight: 'bold',
    // },
});