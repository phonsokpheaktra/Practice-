import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

class ProductStore {
    @observable products = [];

    constructor() {
        makeObservable(this);
    }

    // observable to save data from api
    @observable data = null;

    @action setProducts = (data) => {
        this.products = data;
    };

    @action addProduct = (product) => {
        this.products.push(product);
    };

    @action removeProduct = (id) => {
        this.products = this.products.filter((product) => product.id !== id);
    };

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

    @action updateProduct = (product, id) => {
        axios
            .post("/api/product/edit_product/" + id.toString(), product)
            .then((res) => {
                const newProducts = this.products.map((obj) => {
                    if (obj.id === id) {
                        this.removeProduct(id);
                        this.addProduct(res.data.data);
                    }
                    return obj;
                });
                this.setProducts(newProducts);

                console.log(res.data);
            });
    };

    @action deleteProduct = (id) => {
        axios
            .delete("/api/product/delete_product/" + id.toString())
            .then((res) => {
                this.removeProduct(id);
                console.log(res.data.message);
            });
    };
}

export default new ProductStore();