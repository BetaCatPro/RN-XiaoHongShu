import React from "react"
import {
    StatusBar,
} from "react-native"


import {SafeAreaProvider} from "react-native-safe-area-context"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"

import Home from "./src/modules/home/Home"
import Welcome from "./src/modules/welcome/Welcome"
import Login from "./src/modules/login/Login"

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
                    initialRouteName="Welcome"
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
                        component={Home}
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
