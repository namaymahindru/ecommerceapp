import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null); // Created a context of data that can be used by any component and no use tot pass the data through props
const getDefaultCart = () =>
    {
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++)
        {
            cart[index] = 0;           
        }

        return cart;
    }

const ShopContextProvider = (props) =>

{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) =>
    {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }

    const removeFromCart = (itemId) =>
    {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart};// Passing of the data
    

    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
    

}

export default ShopContextProvider;
