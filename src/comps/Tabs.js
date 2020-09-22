import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

function Home() {
  return (
    <>
    </>
  );
}

function Scan() {
  return (
    <>
    </>
  );
}

function Order() {
  return (
    <>
    </>
  );
}

function Gift() {
  return (
    <>
    </>
  );
}

function Stores() {
  return (
    <>
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
