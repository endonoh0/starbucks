'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Head from './src/screens/Head';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignInAlt, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  return (
    <>
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
    {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Head} />
          <Tab.Screen name="Scan" component={Scan} />
          <Tab.Screen name="Order" component={Order} />
          <Tab.Screen name="Gift" component={Gift} />
          <Tab.Screen name="Stores" component={Stores} />
        </Tab.Navigator>
    </NavigationContainer> */}
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
