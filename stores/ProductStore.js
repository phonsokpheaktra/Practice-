import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

// @observer
// export default class ProductStore {
//     @observable products = [];

//     async getProducts() {
//         await axios.get("/api/product/query_product").then((res) => {
//             const allProducts = res.data;
//             this.products = allProducts;
//         });
//         return this.products;
//     }
// }

class ProductStore {
    @observable products = [];

    constructor() {
        makeObservable(this);
    }

    @action updateProducts = (products) => {
        this.products = products;
    };

    // observable to save data from api
    @observable data = null;

    @action fetchProducts = async () => {
        await axios.get("/api/product/query_product").then((res) => {
            const allProducts = res.data;
            this.setProducts(allProducts);
        });
    };

    @action setProducts = (data) => {
        this.products = data;
    };

    @action addProduct = (product) => {
        this.products.push(product);
    };
}
// makeObservable(ProductStore, {
//     products: observable,
//     updateProducts: action,
//     data: observable,
//     fetchProducts: action,
//     setProducts: action,
// });

export default new ProductStore();
