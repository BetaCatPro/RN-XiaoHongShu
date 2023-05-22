import {Text, View, Button} from "react-native"
import React from "react";

import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from "@react-navigation/stack";

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>()

    const onButtonPress = () => {
        navigation.push('PageA')
        // navigation.goBack()
    }

    return (
        <View>
            <Button title='跳转' onPress={onButtonPress} />
                <Text>Page B</Text>
        </View>
    )
}
