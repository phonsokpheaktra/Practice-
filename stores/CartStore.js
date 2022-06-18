import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

class CartStore {
    @observable cart = [];

    constructor() {
        makeObservable(this);
    }

    @action updateCart = (cart) => {
        this.cart = cart;
    };

    @action addProductToCart = (product) => {
        this.cart.push(product);
    };
}

export default new CartStore();
