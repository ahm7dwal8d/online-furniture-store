import { useContext } from "react";
import { AppContext } from "../../context/createContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartImage from "./CartImage";
import CartHead from "./CartHead";
import CartCategory from "./CartCategory"
import CartPrice from "./CartPrice";
import CartInfo from "./CartInfo";
import Summry from "./Summry"


function Cart() {
    const { Product, removeFromCart } = useContext(AppContext);
    const style = {
        cursor: "pointer"
    }
    console.log(Product)
    return (
        <div className="container pb-3 row">
            <div className="col-lg-3 col-md-12 order-lg-2 order-md-1">
            <Summry />
            </div>
            <div className="col-lg-9 col-md-12 order-lg-1 order-md-2">
            {Product.map((item) => {
                return (
                    <div
                        className="items d-flex mt-5 align-items-center"
                        key={item.id}>
                        <CartImage img={item.thumbnail !== null ? item.thumbnail : item.image} />
                        <div className="info ms-3">
                            <CartHead head={item.title} />
                            <CartCategory cate={item.category} />
                            <CartPrice price={item.price} discounte={item.discountPercentage} />
                            <CartInfo desc={item.description} />
                        </div>
                        <div
                            className="operation"
                            onClick={() => removeFromCart(item.id)}>
                            <FontAwesomeIcon
                                className="text-danger"
                                style={style}
                                icon={faTrash} />
                        </div>
                    </div>
                )
            })} 
            </div>
        </div>
    )
}

export default Cart;