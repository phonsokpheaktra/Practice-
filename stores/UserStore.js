import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import axios from "../axios";

class UserStore {
    @observable currentUser = "";

    constructor() {
        makeObservable(this);
    }

    @action register = (data) => {
        axios.post("/api/user/register", data).then((res) => {
            console.log(res.data);
        });
    };

    @action login = (data) => {
        axios.post("/api/user/login", data).then((res) => {
            console.log(res.data);
        });
    };
}

export default new UserStore();
