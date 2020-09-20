'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}>
          <View style={styles.header}></View>
          <Text style={styles.title}>It's a great day for coffee ☕</Text>
          <View style={styles.headertopnav}>
            <View style={styles.nav}>
            </View>
          </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#1A191A',
    marginTop: 10
  }
});

export default App;
