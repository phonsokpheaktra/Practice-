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
        if (this.productExist(product.id)) {
            this.increaseQuantity(product.id);
        } else {
            this.cart.push(product);
        }
    };

    @action productExist(id) {
        return this.cart.some((obj) => {
            return obj.id === id;
        });
    }

    @action increaseQuantity = (id) => {
        const newCart = this.cart.map((obj) => {
            if (obj.id === id) {
                return { ...obj, quantity: obj.quantity + 1 };
            }
            return obj;
        });
        this.updateCart(newCart);
    };

    @action decreaseQuantity = (id) => {
        const newCart = this.cart.map((obj) => {
            if (obj.id === id) {
                return { ...obj, quantity: obj.quantity - 1 };
            }
            return obj;
        });
        this.updateCart(newCart);
    };

    @computed get updateTotalPrice() {
        return (totalPrice = this.cart.reduce(
            (a, b) => a + b.price * b.quantity,
            0
        ));
    }
}

export default new CartStore();
