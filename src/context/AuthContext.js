import React, { createContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import { getToken } from '../utils/auth.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const token = getToken()
  
  const [auth,setAuth] = useState(token)


const logout = ()=>{
    setAuth(localStorage.removeItem('authToken'))
    redirect('/')
}
  return (
    <AuthContext.Provider value={{logout,auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
