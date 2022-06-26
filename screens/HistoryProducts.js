import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../components/Spacing";
import { inject, observer } from "mobx-react";

function HistoryProducts(props) {
    const {
        historyProducts,
        setHistoryProducts,
        addHistoryProduct,
        fetchHistoryProducts,
        buyProduct,
        clearHistoryProduct,
    } = props.historyStore;

    const showConfirmDialog = (product) => {
        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this order?",
            [
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },
                // The "Yes" button
                {
                    text: "Yes",
                    onPress: () => {
                        clearHistoryProduct(product.id);
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Spacing height={10} />
            {historyProducts.length > 0 ? (
                historyProducts.map((product) => {
                    return (
                        <View style={styles.cartProduct} key={product.id}>
                            {/* <Image
                            source={{ uri: product.image }}
                            style={styles.grayScaleImage}
                        /> */}
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
                            </View>
                            <View style={styles.deleteContainer}>
                                <TouchableOpacity
                                    style={styles.deleteIcon}
                                    onPress={() => showConfirmDialog(product)}
                                >
                                    <Ionicons
                                        name="trash"
                                        size={30}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })
            ) : (
                <View style={styles.emptyHistory}>
                    <Text style={{ textAlign: "center" }}>
                        Product History Empty.
                    </Text>
                </View>
            )}
            <Spacing height={5} />
            <TouchableOpacity
                style={styles.button}
                disabled={historyProducts.length == 0}
            >
                <Text style={styles.buttonText}>Clear History</Text>
            </TouchableOpacity>
        </View>
    );
}

export default inject("historyStore")(observer(HistoryProducts));

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    grayScaleImage: {
        tintColor: "gray",
        width: 80,
        height: 100,
        borderRadius: 10,
    },
    productImage: {
        width: 80,
        height: 100,
        borderRadius: 10,
        // position: "absolute",
        // top: 5,
        // left: 5,
        // opacity: 0.3,
    },
    productInfo: {
        marginLeft: 10,
        width: 120,
        justifyContent: "space-evenly",
    },
    actionContainer: {
        alignItems: "stretch",
        justifyContent: "space-around",
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    deleteContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    deleteIcon: {
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: "#868686",
    },
    emptyHistory: {
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 5,
        marginBottom: 5,
        borderRadius: 10,
        width: 320,
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
});
