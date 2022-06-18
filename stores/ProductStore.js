import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

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

    @action submitProduct = (product) => {
        axios.post("/api/product/create_product", product).then((res) => {
            this.addProduct(res.data.data);
            console.log(res.data.data);
        });
    };

    @action setProducts = (data) => {
        this.products = data;
    };

    @action addProduct = (product) => {
        this.products.push(product);
    };
}

export default new ProductStore();
