import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchFilter from "../screens/SearchFilter";
import ProductDetail from "../screens/ProductDetail";
import ProductView from "../screens/ProductView";

const Stack = createNativeStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchFilter}
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
export default SearchStack;
