import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    Modal,
    TextInput,
    ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "../axios";
import Spacing from "../components/Spacing";

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

function MyProducts(props) {
    const { products, updateProducts, data, fetchProducts, setProducts } =
        props.productStore;

    const [modalData, setModalData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "Electronics", value: 1 },
        { label: "Footwear", value: 2 },
        { label: "Beauty", value: 3 },
        { label: "Apparel", value: 4 },
        { label: "Tableware", value: 5 },
        { label: "Tools", value: 6 },
    ]);

    // const [products, setProducts] = useState([]);

    // const getProducts = () => {
    //     axios.get('/api/product/query_product/')
    //         .then(res => {
    //           const allProducts = res.data;
    //           setProducts(allProducts);
    //         })
    //         .catch(err => console.log(err));
    // };

    useEffect(() => {
        // getProducts();
        fetchProducts();
        setProducts(products);
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
                        setProducts(
                            products.filter(function (f) {
                                return f !== product;
                            })
                        );
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
        <ScrollView style={{ backgroundColor: "#FBEFEF" }}>
            <View style={styles.container}>
                <Spacing height={10} />
                {products.map((product) => {
                    return (
                        <View style={styles.cartProduct} key={product.id}>
                            <Image
                                style={styles.productImage}
                                source={{ uri: product.image }}
                            />
                            <View style={styles.productInfo}>
                                <Text style={styles.priceRow}>
                                    {product.name}
                                </Text>
                                <Text style={styles.priceRow}>
                                    Price: $ {product.price}
                                </Text>
                                <Text>Quantity: {product.quantity}</Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.actionRow,
                                        { backgroundColor: "orange" },
                                    ]}
                                    onPress={() => {
                                        setModalData(product);
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.actionText}>
                                        Update
                                    </Text>
                                </TouchableOpacity>
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
                                                Edit Product
                                            </Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Product Name..."
                                                    value={modalData.name}
                                                    onChangeText={(text) =>
                                                        setName(text)
                                                    }
                                                    selectTextOnFocus={true}
                                                />
                                            </View>
                                            <View
                                                style={[
                                                    styles.inputContainer,
                                                    { zIndex: 1 },
                                                ]}
                                            >
                                                <DropDownPicker
                                                    placeholder="Select Category"
                                                    open={open}
                                                    value={modalData.category}
                                                    items={items}
                                                    setOpen={setOpen}
                                                    setValue={setCategory}
                                                    setItems={setItems}
                                                    containerStyle={{
                                                        width: 160,
                                                        marginBottom: -6,
                                                    }}
                                                />
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Quantity..."
                                                    value={modalData.quantity}
                                                    onChangeText={(text) =>
                                                        setQuantity(text)
                                                    }
                                                    selectTextOnFocus={true}
                                                />
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Price..."
                                                    value={modalData.price}
                                                    onChangeText={(text) =>
                                                        setPrice(text)
                                                    }
                                                    selectTextOnFocus={true}
                                                />
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Description..."
                                                    value={
                                                        modalData.description
                                                    }
                                                    onChangeText={(text) =>
                                                        setDescription(text)
                                                    }
                                                    selectTextOnFocus={true}
                                                />
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    marginTop: 10,
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={[
                                                        styles.button,
                                                        {
                                                            backgroundColor:
                                                                "white",
                                                            borderWidth: 2,
                                                            borderColor: "red",
                                                        },
                                                    ]}
                                                    onPress={() => {
                                                        setModalVisible(
                                                            !modalVisible
                                                        );
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            styles.buttonText,
                                                            {
                                                                color: "red",
                                                            },
                                                        ]}
                                                    >
                                                        Cancel
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={[
                                                        styles.button,
                                                        {
                                                            backgroundColor:
                                                                "green",
                                                        },
                                                    ]}
                                                    onPress={() =>
                                                        setModalVisible(
                                                            !modalVisible
                                                        )
                                                    }
                                                >
                                                    <Text
                                                        style={[
                                                            styles.buttonText,
                                                            {
                                                                color: "white",
                                                            },
                                                        ]}
                                                    >
                                                        Update
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                <TouchableOpacity
                                    style={[
                                        styles.actionRow,
                                        { backgroundColor: "#FF3f3f" },
                                    ]}
                                    onPress={() => showConfirmDialog(product)}
                                >
                                    <Text style={styles.actionText}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}
export default inject("productStore")(observer(MyProducts));

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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    box: {
        backgroundColor: "white",
        height: 420,
        width: 300,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#666",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    inputContainer: {
        width: "80%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#666",
        padding: 8,
        margin: 10,
    },
    input: {
        width: "90%",
    },
    button: {
        justifyContent: "center",
        width: 120,
        height: 40,
        margin: 5,
        borderRadius: 10,
    },
    buttonText: {
        color: "#1c1c1e",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
    },
});
