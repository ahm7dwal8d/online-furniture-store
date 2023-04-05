import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "./style.css"
import { AppContext } from "../../context/createContext";
import { Link } from "react-router-dom";

function FeatureProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=8").then((res) => {
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
                                    <img
                                        className="w-80"
                                        style={{width: '80%', borderRadius: '4px'}}
                                        src={item.image} alt="" />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <div className="btn">
                                    <Link
                                        to={`/Home/${item.id}`}
                                        className='btn text-white w-25 d-flex justify-content-center'
                                        style={{
                                            backgroundColor: '#772727'
                                        }}
                                    >Buy</Link>
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
            <Link to='Feature'
                className="text-capitalize text-white p-2 rounded text-decoration-none mt-3 ms-auto me-auto d-block d-flex justify-content-center"
                style={{backgroundColor: 'rgb(119, 39, 39)', width: '150px'}}
            >
                view all
            </Link>
        </div>
    )
}

export default FeatureProduct;