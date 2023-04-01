import { useContext } from "react";
import { AppContext } from "../../context/createContext";


function CartOepartion() {
    const { checkOut } = useContext(AppContext);
    return <button
        className="checkout-btn bg-danger text-capitalize w-50 me-auto mt-4 border-opacity-10 border-danger rounded text-white"
        onClick={ checkOut}>
        checkout
    </button>
}

export default CartOepartion;