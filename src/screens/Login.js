import React, { useContext, useState } from 'react';
import axios from 'axios';
const config = require('../config.json');

import {
  Text,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { AuthContext } from '../AuthProvider';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const res = await axios.get(`${config.api.invokeUrl}/user/3`);
      const resultPassword = res.data.password;
      const resultEmail = res.data.email;
      if (resultPassword == password && resultEmail == email) {
        setEmail("");
        setPassword("");
        login();
      }
    } catch (error) {
      console.log(`An error has occured: ${error}`);
    }
  }

  return (
    <>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
      placeholder="Email or username"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setPassword(text)}
      value={password}
      placeholder="Password"
    />
    <Button
      title="Sign in"
      onPress={handleSubmit}
    />
    </>
  );
}

export default Login;
