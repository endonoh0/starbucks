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

const Stores = () => {
  const {logout} = useContext(AuthContext);
  return (
    <>
    <Text>User is logged in</Text>
    <Button title="Log out" onPress={() => logout()} />
    </>
  );
}

export default Stores;
