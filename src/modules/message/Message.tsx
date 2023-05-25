import React, {useEffect} from "react";

import {StyleSheet, View, Text} from "react-native";
import {useNavigation} from '@react-navigation/native'

import icon_logo_main from "../../assets/icon_main_logo.png"
import {StackNavigationProp} from "@react-navigation/stack";

export default () => {
    const navigation = useNavigation<StackNavigationProp<any>>()

    return (
        <View style={styles.root}>
            <Text>消息</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center"
    }
})

