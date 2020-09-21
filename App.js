'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
// import * as React from 'react';
import React, { useContext, useEffect } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Head from './src/screens/Head';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();

// import { ActivityIndicator, AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './src/AuthProvider';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native'
import { AppTabs } from './src/screens/Tabs';
import Stores from './src/screens/Stores';

export default function App() {
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    // Check if the user is logged in or not
    async () => {
      await AsyncStorage.getItem("user")
        .then(userString => {
          if (userString) {
            login();
          }
      })
        .catch(err => {
          console.log('error', err);
      });
    }
  }, []);

  return (
    <>
    <NavigationContainer>
      {user ?
        <Stores />
        : (
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Head}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTitle: "Starbucks Rewards"
          }}
        />
      </Stack.Navigator> )}
    </NavigationContainer>
    </>
  );
}

// import {
//   StyleSheet,
//   ScrollView,
//   StatusBar,
// } from 'react-native';


// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <ScrollView
//         style={styles.scrollView}>
//         <Head/>

//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
// });

// export default App;
