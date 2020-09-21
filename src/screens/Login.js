import React, { useContext } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const {login} = useContext(AuthContext);

  return (
    <>
    <Button
      title="login"
      onPress={() => {
        login();
      }}
    />
    </>
  );
}

export default Login;
