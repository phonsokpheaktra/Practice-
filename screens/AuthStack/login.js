import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

function Login(props) {
    const { currentUser, register, login } = props.userStore;
    const navigation = useNavigation();
    const goToSignUpScreen = () => {
        navigation.navigate("SignUp");
    };
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        try {
            login({
                email: email,
                password: password,
            });
            navigation.navigate("Home");
        } catch (err) {
            console.log(err);
            throw err;
            return;
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/screen.jpg")}
                resizeMode="cover"
                style={styles.background}
            >
                <View style={styles.box}>
                    <Text style={styles.title}>Sign in</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email..."
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password..."
                            secureTextEntry={passwordVisibility}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Pressable onPress={handlePasswordVisibility}>
                            <Ionicons
                                name={rightIcon}
                                size={22}
                                color="#232323"
                            />
                        </Pressable>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={styles.authContainer}>
                        <Text style={styles.authText}>or sign in with:</Text>
                        <Image
                            style={styles.google}
                            source={require("../../assets/logo/google.png")}
                        />
                        <Image
                            style={styles.facebook}
                            source={require("../../assets/logo/facebook.png")}
                        />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.link}>Forgot Password?</Text>
                        <Text style={styles.link} onPress={goToSignUpScreen}>
                            Sign Up
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default inject("userStore")(observer(Login));

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBEFEF",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    box: {
        backgroundColor: "white",
        height: 320,
        width: 300,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#666",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    inputContainer: {
        width: "80%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#666",
        padding: 8,
        margin: 10,
    },
    input: {
        width: "90%",
    },
    button: {
        justifyContent: "center",
        width: 120,
        height: 40,
        backgroundColor: "#FF9C9C",
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    authContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    authText: {
        color: "#757575",
    },
    google: {
        marginLeft: 10,
        height: 30,
        width: 30,
    },
    facebook: {
        marginLeft: 10,
        height: 35,
        width: 35,
    },
    linkContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    link: {
        textDecorationLine: "underline",
        paddingEnd: 10,
        color: "#757575",
    },
});
