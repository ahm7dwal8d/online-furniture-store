import { useState } from "react";
import { AppContext } from "./createContext";


function ContextProvider({ children }) {
    const [Product, setProduct] = useState([]);
    const addToCart = (item) => {
        setProduct([...Product, item])
    }
    const removeFromCart = (ids) => {
        const cart = Product.filter((item) => {
            return item.id !== ids
        })
        setProduct(cart)
    }
    return (    
        <AppContext.Provider value={{
            Product,
            addToCart,
            removeFromCart
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;