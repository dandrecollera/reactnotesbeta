import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, StatusBar, Dimensions } from "react-native";
import colors from "../misc/colors";
import { AntDesign } from "@expo/vector-icons";
import RoundIconBtn from "../components/RoundIconBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Intro = ({ onFinish }: any) => {
    const [name, setName] = useState("");

    const handleSubmit = async () => {
        const user = { name: name };
        await AsyncStorage.setItem("user", JSON.stringify(user));
        if (onFinish) onFinish();
    };

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle}>Enter yor name to continue.</Text>
                <TextInput
                    value={name}
                    onChangeText={(userInput) => setName(userInput)}
                    placeholder="Enter Name"
                    style={styles.textInput}
                />
                {name.trim().length >= 3 ? (
                    <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
                ) : null}
            </View>
        </>
    );
};

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 15,
        marginBottom: 15,
    },
    inputTitle: {
        alignSelf: "flex-start",
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,
    },
});

export default Intro;
