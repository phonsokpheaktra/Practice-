import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import ProductView from "../screens/ProductView";

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerBackVisible: false }}
            />
            <Stack.Screen
                name="ProductView"
                component={ProductView}
                options={{ title: "" }}
            />
        </Stack.Navigator>
    );
}
export default HomeStack;
