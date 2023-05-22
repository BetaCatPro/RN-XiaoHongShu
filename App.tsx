import React from 'react';
import {
    StatusBar,
} from 'react-native';


import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';


import PageA from './src/modules/PageA';
import PageB from './src/modules/PageB';

const Stack = createStackNavigator()

function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'white'}
            />

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='PageA'
                    screenOptions={{
                        cardStyle: {
                            elevation: 1
                        }
                    }}
                >
                    <Stack.Screen
                        name='PageA'
                        component={PageA}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name='PageB'
                        component={PageB}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.ModalSlideFromBottomIOS
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaProvider>
    );
}

export default App;
