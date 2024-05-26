import {jwtDecode} from 'jwt-decode';

export const saveAuthData = (token) => {
  localStorage.setItem('authToken', token);
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const userRole = () => {
  const token = getToken();
  if (token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.role;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }
  return null;
};

export const user = () => {
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

export const isAuthenticated = () => {
  return !!getToken();
};
