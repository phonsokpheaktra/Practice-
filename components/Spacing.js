import React from "react";
import { View } from "react-native";

export default function Spacing(props) {
    return (
        <View
            style={{
                height: props.height || 0.5,
            }}
        />
    );
}
