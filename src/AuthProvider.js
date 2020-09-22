import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{
      user,
      login: async () => {
        const fakeUser = { username: 'Eric' }
        setUser(fakeUser);
        try {
          await AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        } catch (e) {
          console.log('err', e);
        }
      },
      logout: async () => {
        setUser(null);
        await AsyncStorage.removeItem("user");
      },
    }}>
      {children}
    </AuthContext.Provider>
  )
};
