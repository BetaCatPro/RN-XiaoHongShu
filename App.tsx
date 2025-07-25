import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Login from './src/pages/Login';
import Welcome from './src/pages/Welcome';
import MainTab from './src/pages/MainTab';

const Stack = createStackNavigator();
const App = (): React.JSX.Element => {
  return (
    <View>
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainTab"
            screenOptions={{
              cardStyle: {elevation: 1},
            }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />

            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};

export default App;
