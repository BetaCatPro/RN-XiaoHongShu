import React from "react"
import {
    StatusBar,
} from "react-native"


import {SafeAreaProvider} from "react-native-safe-area-context"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"

import Welcome from "./src/modules/welcome/Welcome"
import Login from "./src/modules/login/Login"
import MainTab from "./src/modules/mainTab/MainTab"
import ArticleDetail from "./src/modules/articleDetail/ArticleDetail"

const Stack = createStackNavigator()

function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={"white"}
            />

            <NavigationContainer>
                <Stack.Navigator
                    // 开发测试
                    initialRouteName="MainTab"
                    screenOptions={{
                        cardStyle: {
                            elevation: 1
                        }
                    }}
                >
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.ModalSlideFromBottomIOS
                        }}
                    />

                    <Stack.Screen
                        name="MainTab"
                        component={MainTab}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.ModalSlideFromBottomIOS
                        }}
                    />

                    <Stack.Screen
                        name="ArticleDetail"
                        component={ArticleDetail}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.ModalSlideFromBottomIOS
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaProvider>
    )
}

export default App
