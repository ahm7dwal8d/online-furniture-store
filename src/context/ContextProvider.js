import { useState } from "react";
import { AppContext } from "./createContext";


function ContextProvider({ children }) {
    const [Product, setProduct] = useState([]);
    const [theme, setTheme] = useState('light');
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
    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const light = {
        bg: "#fff",
        color: "#000"
    }
    const dark = {
        bg: "#1A1A1A",
        color: "#fff"
    }
    return (    
        <AppContext.Provider value={{
            Product,
            addToCart,
            removeFromCart,
            checkOut,
            theme,
            switchTheme,
            light,
            dark
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;