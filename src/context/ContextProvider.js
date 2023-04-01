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
    const checkOut = () => {
        setProduct([])
    }
    return (    
        <AppContext.Provider value={{
            Product,
            addToCart,
            removeFromCart,
            checkOut
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;