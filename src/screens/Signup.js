import React, { useState } from 'react';
import axios from "axios";
const config = require('../config.json');

import {
  Text,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const params = {
        "id": "3",
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password
      }
      await axios.post(`${config.api.invokeUrl}/user`, params);
      console.log("success: ");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      alert("Sign up successful");
    } catch (error) {
      console.log(`An error has occured: ${error}`);
    }
  }

  return (
    <>
    <Text>Personal Info</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setFirstName(text)}
      value={firstname}
      placeholder="First name"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setLastName(text)}
      value={lastname}
      placeholder="Last name"
    />

    <Text>Security</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
      placeholder="email"
    />

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setPassword(text)}
      value={password}
      placeholder="password"
    />
    <Button title="Join now" onPress={handleSubmit}/>
    </>
  );
}

export default Signup;
