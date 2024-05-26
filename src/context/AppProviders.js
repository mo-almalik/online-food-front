import React from "react";
import { AuthProvider } from "./AuthContext.js";
import { ProductsProvider } from "./ProductsContext.js";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </AuthProvider>
  );
};

export default AppProviders;
