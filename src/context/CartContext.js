import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api.js';

const CartsContext = createContext();

const CartsProvider = ({ children }) => {
    const [Carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //   get all Carts
    const fetchCarts = async () => {
        try {
            setLoading(true);
            const response = await api.get('/carts');
            setCarts(response.data?.data)
            setLoading(false);
          
        } catch (err) {
            setError(err.response.data.message)
        }
        setLoading(false);
    };




    return (
        <CartsContext.Provider value={{ Carts, loading, error ,fetchCarts }}>
            {children}
        </CartsContext.Provider>
    );
};

export { CartsContext, CartsProvider };
