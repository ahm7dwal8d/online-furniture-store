import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "./style.css"
import { AppContext } from "../../context/createContext";

function FeatureProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProduct(res.data)
        })
    }, [])
    const { addToCart } = useContext(AppContext);
    return (
        <div className="feature">
            <div className="container">
                <div className="head">
                    <h5>featured products</h5>
                </div>
                <div className="feature-content">
                    {product?.map((item) => {
                        return (
                            <div className="feat-product" key={item.id}>
                                <div className="img">
                                    <img
                                        className="w-100"
                                        src={item.image} alt="" />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <div className="btn">
                                    <button
                                        className="cart"
                                        onClick={() => addToCart(item)}>add to cart</button>
                                    <span className="product-price">
                                        <FontAwesomeIcon
                                            icon={faCartShopping} />
                                        {item.price}$
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Button value='view all' link='Product' width='20px auto'/>
        </div>
    )
}

export default FeatureProduct;