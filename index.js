/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { AuthProvider } from "./src/AuthProvider";
import App from './App';
import {name as appName} from './app.json';

const ProvideApp = () => {
  return <AuthProvider>
    <App />
  </AuthProvider>
}

AppRegistry.registerComponent(appName, () => ProvideApp);
