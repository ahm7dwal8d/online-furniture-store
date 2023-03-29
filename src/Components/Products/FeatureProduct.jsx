import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "./style.css"

function FeatureProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/featured-product").then((res) => {
            setProduct(res.data)
        })
    }, [])
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
                                    <img src={item.images } alt="" />
                                </div>
                                <h5>{item.head}</h5>
                                <p>{item.body}</p>
                                <div className="btn">
                                    <button className="cart">add to cart</button>
                                    <span className="product-price">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        {item.prices}$
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