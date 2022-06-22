import React from "react";
import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import axios from "../axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        axios
            .get("/api/product/query_product")
            .then((res) => {
                const allProducts = res.data;
                setProducts(allProducts);
            })
            .catch((err) => console.log(err));
    };

    const getCategories = () => {
        axios
            .get("/api/category/query_category")
            .then((res) => {
                const allCategories = res.data;
                setCategories(allCategories);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.categoryContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.categoryTitle}>Category</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {categories.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            style={styles.categoryIcon}
                                            source={{ uri: item.image }}
                                        ></Image>
                                    </View>
                                    <Text style={styles.eachCategoryTitle}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.categoryTitle}>Featured Products</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productRow}>
                    {products ? (
                        products.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    style={styles.eachProduct}
                                    key={index}
                                    onPress={() => {
                                        navigation.navigate(
                                            "ProductView",
                                            item
                                        );
                                    }}
                                >
                                    <Image
                                        style={styles.productImage}
                                        source={{ uri: item.image }}
                                    ></Image>
                                    <Text style={styles.productTitle}>
                                        {item.name}
                                    </Text>
                                    {/* <Text style={{ flexWrap: "wrap" }}>
                                        {item.description}
                                    </Text> */}
                                    <View style={styles.tagContainer}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={
                                                false
                                            }
                                        >
                                            {item.tag.map((tag, index) => {
                                                return (
                                                    <Text
                                                        key={index}
                                                        style={
                                                            styles.productTag
                                                        }
                                                    >
                                                        {tag.name}
                                                    </Text>
                                                );
                                            })}
                                        </ScrollView>
                                    </View>
                                    <View style={styles.priceRow}>
                                        <Text style={styles.price}>
                                            ${item.price}
                                        </Text>
                                        <TouchableOpacity style={styles.add}>
                                            <Ionicons
                                                name="add"
                                                size={24}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    ) : (
                        <Text>No data yet</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBEFEF",
        height: "100%",
        // justifyContent: 'center',
        paddingTop: 10,
        // alignItems: 'center',
    },
    categoryContainer: {
        width: "100%",
        padding: 10,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        alignItems: "flex-end",
    },
    categoryTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#222",
    },
    seeMore: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#FF9C9C",
        borderRadius: 5,
        padding: 5,
    },
    categoryRow: {
        flexDirection: "row",
        overflow: "scroll",
    },
    iconContainer: {
        padding: 5,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    categoryIcon: {
        height: 80,
        width: 80,
    },
    eachCategoryTitle: {
        textAlign: "center",
    },
    productContainer: {
        padding: 10,
        marginBottom: 10,
        width: "100%",
        overflow: "scroll",
    },
    productRow: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    eachProduct: {
        padding: 8,
        margin: 5,
        width: 160,
        // height: 200,
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    productImage: {
        height: 180,
        width: "100%",
        borderRadius: 10,
    },
    productTitle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "500",
        color: "#222",
    },
    tagContainer: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    productTag: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3,
        color: "#555",
        backgroundColor: "#eee",
        marginEnd: 5,
        borderRadius: 4,
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop: 10,
    },
    price: {
        // marginTop: 5,
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
    },
    add: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ddd",
    },
});
