import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "mobx-react";
import ProductStore from "./stores/ProductStore";
import CartStore from "./stores/CartStore";
import HistoryStore from "./stores/HistoryStore";
import UserStore from "./stores/UserStore";

import AuthStack from "./routes/AuthStack";
import ProductView from "./screens/ProductView";

export default function App() {
    return (
        <Provider
            productStore={ProductStore}
            cartStore={CartStore}
            historyStore={HistoryStore}
            userStore={UserStore}
        >
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </Provider>
        // <ProductView/>
    );
}

const styles = StyleSheet.create({});
