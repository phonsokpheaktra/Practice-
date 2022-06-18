import React from "react";
import { observable, action, computed, makeObservable } from "mobx";

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
            this.setData(allProducts);
        });
    };

    @action setProducts = (data) => {
        this.products = data;
    };
}

export default new ProductStore();
