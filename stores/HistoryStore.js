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

    @action fetchHistoryProducts = () => {
        await axios.get("/api/cart/query_cart").then((res) => {
            const allProducts = res.data;
            this.setHistoryProducts(allProducts);
        });
    }

    @action BuyProduct = (product) => {
        axios.post("/api/cart/create_cart", product).then((res) => {
            this.addHistoryProduct(res.data.data);
            console.log(res.data.data);
        });
    }
}

export default new HistoryStore();
