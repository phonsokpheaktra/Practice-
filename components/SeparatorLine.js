import React from "react";
import { View } from "react-native";

export default function SeparatorLine(props) {
    return (
        // Flat List Item Separator
        <View
            style={{
                margin: props.margin || 2,
                height: 0.5,
                // width: '100%',
                backgroundColor: "#C8C8C8",
            }}
        />
    );
}
