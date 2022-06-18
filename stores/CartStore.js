import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

class CartStore {
    @observable cart = [];
    @observable totalPrice = 0;

    constructor() {
        makeObservable(this);
    }

    @action updateCart = (cart) => {
        this.cart = cart;
    };

    @action addProductToCart = (product) => {
        if (this.productExist(product.id)) {
            const newCart = this.cart.map((obj) => {
                if (obj.id === product.id) {
                    return { ...obj, quantity: product.quantity + 1 };
                }
                return obj;
            });
            this.updateCart(newCart);
        } else {
            this.cart.push(product);
        }
    };

    @action productExist(id) {
        return this.cart.some((obj) => {
            return obj.id === id;
        });
    }

    @computed get updateTotalPrice() {
        return (this.totalPrice = this.cart.reduce(
            (a, b) => a + b.price * b.quantity,
            0
        ));
    }
}

export default new CartStore();
