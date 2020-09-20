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

import Head from './Head';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}>
        <Head/>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
