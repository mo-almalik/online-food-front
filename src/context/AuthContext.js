import React, { createContext } from 'react';
import { redirect } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import CryptoJS from 'crypto-js';

const AuthContext = createContext();
const secretKey = process.env.REACT_APP_SECRET_KEY;
const AuthProvider = ({ children }) => {
 
 
// save token in local
  const saveAuthData = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
    localStorage.setItem('authToken', encryptedToken);
  };

  // get token from local
  const getToken = () => {
    const encryptedToken = localStorage.getItem('authToken');
    if (!encryptedToken) return null;
    const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };


  // user data name role and jwt 
const user = () => {
  const token = getToken();
  if (token) {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }
  return null;
};


// just check if user hav token or not
  const isAuthenticated = () => {
    return !!getToken();
  };


  // logOut 
const logout = ()=>{
 localStorage.removeItem('authToken')
    redirect('/')
}


  return (
    <AuthContext.Provider value={{logout,isAuthenticated  ,user ,saveAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
