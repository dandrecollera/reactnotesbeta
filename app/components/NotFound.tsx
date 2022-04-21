import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NotFound = () => {
    // @ts-ignore
    const icon = <AntDesign name="frowno" size={90} color="black" />;
    return (
        <>
            <View style={[StyleSheet.absoluteFillObject, styles.container]}>
                {icon}
                <Text style={{ marginTop: 20, fontSize: 20 }}>Result not found.</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5,
        zIndex: -1,
    },
});

export default NotFound;
