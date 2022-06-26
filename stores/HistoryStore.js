import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

class HistoryStore {
    @observable historyProducts = [];

    constructor() {
        makeObservable(this);
    }

    @action setHistoryProducts = (data) => {
        this.historyProducts = data;
    };

    @action addHistoryProduct = (product) => {
        this.historyProducts.push(product);
    };

    @action isProductExist(id) {
        return this.historyProducts.some((obj) => {
            return obj.id === id;
        });
    }

    @action fetchHistoryProducts = async () => {
        await axios.get("/api/cart/query_cart").then((res) => {
            const allProducts = res.data;
            this.setHistoryProducts(allProducts);
        });
    };

    @action buyProduct = (product) => {
        if (!this.isProductExist(product.id)) {
            this.addHistoryProduct(product);
        }
    };

    @action clearHistoryProduct = (id) => {
        this.historyProducts = this.historyProducts.filter(
            (data) => data.id !== id
        );
    };

    @action clearAllHistory = () => {
        this.historyProducts = [];
    };
}

export default new HistoryStore();
