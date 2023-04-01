import { useContext } from "react";
import { AppContext } from "../../context/createContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartImage from "./CartImage";
import CartHead from "./CartHead";
import CartCategory from "./CartCategory"
import CartPrice from "./CartPrice";
import CartInfo from "./CartInfo";
import Summry from "./Summry"
import CartOepartion from "./CartOperation"


function Cart() {
    const { Product, removeFromCart } = useContext(AppContext);
    const style = {
        cursor: "pointer"
    }
    console.log(Product)
    return (
        <div className="container pb-3 ">
            <div className="row">
            <div className="col-lg-3 col-md-12 order-lg-2 order-md-1">
            <Summry />
            </div>
            <div className="col-lg-9 col-md-12 order-lg-1 order-md-2">
            {Product.length !== 0 ? (Product.map((item) => {
                return (
                    <div
                        className="items d-flex mt-5 align-items-center"
                        key={item.id}>
                        <CartImage thumbnail={item.thumbnail} img={item.image} />
                        <div className="info ms-3">
                            <CartHead head={item.title} />
                            <CartCategory cate={item.category} thumbnail={ item.thumbnail} />
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
            })) : (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{height: "100%"}}>
                                <div className="info text-capitalize">
                                <h4>No Product Here</h4>
                                <Link to='/Product'>Redirect to product page</Link>
                                </div>
                            </div>
            )} 
            </div>
            </div>
            <CartOepartion />
        </div>
    )
}

export default Cart;