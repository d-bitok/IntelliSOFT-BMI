import React from 'react';
import {
  Home,
  Profile,
  BMI,
  Register,
  Report,
  Login
} from './screens';

import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';

import Tabs from './navigation/tabs'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  },
};

const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default function App() {
    const [loaded] = useFonts({
    "Typo-Round-Bold" : require('./assets/fonts/Typo_Round_Bold_Demo.otf'),
    "Typo-Round-Regular" : require('./assets/fonts/Typo_Round_Regular_Demo.otf'),
    "Typo-Round-Light" : require('./assets/fonts/Typo_Round_Light_Demo.otf'),
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  })

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Register'}
        >
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Report' component={Report} />
          <Stack.Screen name='Home' component={Tabs} />
          <Stack.Screen name='BMI' component={BMI} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}