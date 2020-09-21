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
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Head from './screens/Head';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();
// const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// export default () => {
//   return (
//   <NavigationContainer>
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="Home" >
//           {props => <Head {...props} screenName={Login} />}
//       </AuthStack.Screen>
//       <AuthStack.Screen name="Sign In" component={Login} />
//       <AuthStack.Screen name="Starbucks Rewards In" component={Signup} />
//     </AuthStack.Navigator>
//   </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Head {...props} screenName={Login} />}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Login} />
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
