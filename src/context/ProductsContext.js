import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api.js';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //   get all products
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await api.get('/products');
            setProducts(response.data?.data)
            setLoading(false);
            console.log("ptest" ,response);
        } catch (err) {
            setError(err.response.data.message)
        }
        setLoading(false);
    };

        //   get all products
    const fetchSingleProduct = async (id) => {
    try {
        setLoading(true);
        const response = await api.get(`/products/${id}`);
        setProducts(response.data?.data)
        setLoading(false);
        } catch (err) {
        setError(err)
        
        }
        setLoading(false);
    };



    return (
        <ProductsContext.Provider value={{ products, loading, error ,fetchSingleProduct,fetchProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsContext, ProductsProvider };
