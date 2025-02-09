import axios from 'axios';
import React, { createContext, useState } from 'react'


const GlobalContext = createContext(null);

export function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('')
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState([]);

    function handleSubmit(e) {
        console.log(searchParam)
        axios.get(`https://fakestoreapi.com/products/category/${searchParam}`)
            .then(response => {
                setProducts(response.data);
            })
    }

    return (
        <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, products, setProducts, cartItems, setCartItems, cart, setCart }}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContext
