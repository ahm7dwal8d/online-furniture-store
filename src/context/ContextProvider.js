import { useState } from "react";
import { AppContext } from "./createContext";


function ContextProvider({ children }) {
    const [Product, setProduct] = useState([]);
    const addToCart = (item) => {
        setProduct([...Product, item])
    }
    return (    
        <AppContext.Provider value={{
            Product,
            addToCart
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;