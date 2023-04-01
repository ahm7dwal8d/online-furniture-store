import { useContext } from "react";
import { AppContext } from "../../context/createContext";

function Summry() {
    const { Product } = useContext(AppContext);
    return (
        <div className="summry pt-3 pb-3">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="m-0 p-0 list-group">
                <li className="text-capitalize list-group-item d-flex justify-content-between align-items-center"><span>subtotal</span>
                    {Product.reduce((acc, current) => {
                    return acc + current.price
                }, 0).toFixed(2)}$
                </li>
                <li className="text-capitalize list-group-item d-flex justify-content-between align-items-center">shopping cost <span>0$</span></li>
                <li className="text-capitalize list-group-item d-flex justify-content-between align-items-center">discount <span>0$</span></li>
                <li className="text-capitalize list-group-item d-flex justify-content-between align-items-center"><span>total</span>
                {Product.reduce((acc, current) => {
                    return acc + current.price
                }, 0).toFixed(2)}$</li>
            </ul>
        </div>
    )
}

export default Summry;