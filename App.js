import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "mobx-react";
import stores from "./stores";

import AuthStack from "./routes/AuthStack";
import ProductView from "./screens/ProductView";

export default function App() {
    return (
        <Provider stores={stores}>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </Provider>
        // <ProductView/>
    );
}

const styles = StyleSheet.create({});
