import { useContext } from "react";
import { AppContext } from "../../context/createContext";


function CartOepartion() {
    const { checkOut, Product } = useContext(AppContext);
    return (
        <>
        <button
        className="checkout-btn bg-danger text-capitalize w-50 me-auto mt-4 border-opacity-10 border-danger rounded text-white"
        onClick={ checkOut}>
        checkout
        </button>
        <span className="w-25 d-inline-block bg-danger text-white ms-4 p-1 text-center rounded">{Product.length}</span>
        </>
    )
}

export default CartOepartion;