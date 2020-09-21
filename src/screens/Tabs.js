import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignInAlt, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

const Tabs = createBottomTabNavigator();

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

function Home() {
  return (
    <>
    {/* <FontAwesomeIcon
      icon={faSignInAlt}
      size={25} color={""}
      /> */}
    {/* <Text>Home</Text> */}
    </>
  );
}

function Scan() {
  return (
    <>
      <FontAwesomeIcon
        icon={faEnvelope}
        size={25} color={""}
      />
      <Text>Scan</Text>
    </>
  );
}

function Order() {
  return (
    <>
      <FontAwesomeIcon
        icon={faSignInAlt}
        size={25} color={""}
      />
      <Text>Order</Text>
    </>
  );
}

function Gift() {
  return (
    <>
      <FontAwesomeIcon
        icon={faSignInAlt}
        size={25} color={""}
      />
      <Text>Gift</Text>
    </>
  );
}

function Stores() {
  return (
    <>
      <FontAwesomeIcon
        icon={faSignInAlt}
        size={25} color={""}
      />
      <Text>Stores</Text>
    </>
  );
}


export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Scan" component={Scan} />
      <Tabs.Screen name="Order" component={Order} />
      <Tabs.Screen name="Gift" component={Gift} />
      <Tabs.Screen name="Stores" component={Stores} />
    </Tabs.Navigator>
  )
}
