import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderButton from "../components/headerButton";

import Sidebar from "../screens/sidebar";
import EditProfile from "../screens/EditProfile";
import MyProducts from "../screens/MyProducts";
import History from "../screens/HistoryProducts";

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Sidebar"
                component={Sidebar}
                options={{ headerBackVisible: false }}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen
                name="MyProducts"
                component={MyProducts}
                options={{
                    headerRight: () => <HeaderButton />,
                }}
            />
            <Stack.Screen
                name="History"
                component={History}
                options={{ title: "Shopping History" }}
            />
        </Stack.Navigator>
    );
}
export default ProfileStack;
