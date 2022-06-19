import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Spacing from "../components/Spacing";

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

function ProductView(props) {
    const { cart, totalPrice, updateCart, addProductToCart, increaseQuantity } =
        props.cartStore;
    const tags = ["yes", "no", "maybe", "other", "as well"];

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: props.route.params.image }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.rightBox}>
                <View style={styles.productHeader}>
                    <Text style={styles.title}>{props.route.params.name}</Text>
                    <Text style={styles.price}>
                        ${props.route.params.price}
                    </Text>
                </View>
                <Spacing height={20} />
                {/* <Text style={[styles.productTag, {maxWidth:110, textAlign: "center"}]}>21-03-2022</Text> */}
                <View style={styles.tagContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {tags.map((tag, index) => {
                            return (
                                <Text key={index} style={styles.productTag}>
                                    {tag}
                                </Text>
                            );
                        })}
                    </ScrollView>
                </View>
                <Spacing height={20} />
                <Text style={[styles.title, { color: "grey" }]}>
                    PRODUCT DETAILS
                </Text>
                <Spacing height={10} />
                <View style={styles.productDetail}>
                    <Text style={{ color: "grey" }}>
                        How do you pass data between components in react native?
                        First, you'll need to create two components, one parent
                        and one child. Next, you'll import the child component
                        in the parent component and return it. Then you'll
                        create a function and a button to trigger that function.
                        Also, you'll create a state using the useState Hook to
                        manage the data
                    </Text>
                </View>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity
                    style={styles.addToCart}
                    onPress={() => {
                        addProductToCart(props.route.params);
                        console.log(props.route.params);
                        console.log(cart);
                    }}
                >
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNow}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default inject("cartStore")(observer(ProductView));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBEFEF",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "row",
    },
    rightBox: {
        flex: 5,
        padding: 20,
    },
    imageContainer: {
        backgroundColor: "white",
        width: "100%",
        height: 300,
        flex: 4,
    },
    image: {
        height: "100%",
    },
    productHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        flex: 3,
        fontSize: 20,
        fontWeight: "500",
        textTransform: "uppercase",
    },
    price: {
        flex: 2,
        textAlign: "right",
        fontSize: 40,
        fontWeight: "500",
        paddingEnd: 20,
    },
    tagContainer: {
        marginTop: 5,
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    productTag: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        paddingTop: 5,
        color: "#555",
        backgroundColor: "#fff",
        marginEnd: 5,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "#999",
    },
    productDetail: {
        padding: 20,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    actionButtons: {
        flexDirection: "row",
        flex: 1,
    },
    addToCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    buyNow: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FF9C9C",
    },
    buyNowText: {
        color: "white",
    },
});
