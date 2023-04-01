import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { AppContext } from "../../context/createContext";

function Products() {
    const [product, setProduct] = useState([]);
    const [state, setState] = useState(10);
    const [cateProduct, setCate] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setCate(res.data.products)
        })
        axios.get(`http://localhost:3000/products?_limit=${state}`).then((res) => {
            setProduct(res.data)
        })
    }, [])
    const { addToCart } = useContext(AppContext);
    return (
        <div className="product">
            <div className="container row">
                <div className="category me-4 col-lg-4 col-md-12 col-sm-12">
                    <ul className='p-0 mb-4 list-group '>
                        <h5 className="category-head">categories</h5>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                        <li className="list-group">sofas (6)</li>
                    </ul>
                </div>
                <div className="products-content  col-lg-8 col-md-12 col-sm-12">
                    <div className="product-head">
                        <h5>new products</h5>
                        <div className="btn">
                            {state !== 1 && (
                                <div
                                    className="right-btn"
                                    onClick={() => setState(state - 1)}>
                                    <FontAwesomeIcon
                                        icon={faAngleLeft} />
                                </div>
                            )}
                            {state < 6 && (
                            <div
                                className="left-btn"
                                onClick={() => setState(state + 1)}>
                                <FontAwesomeIcon 
                                    icon={faAngleRight} />
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="products">
                        <div className="row">
                        {cateProduct.map((item) => {
                            return (
                                <div className="product col-lg-3 col-md-6 col-sm-12 mt-4" key={item.id}>
                                    <img
                                        src={item.thumbnail}
                                        className='w-50'
                                        alt="" />
                                    <h6 className="mt-2">{item.description}</h6>
                                    <span className="opacity-50 fs-6 d-block">{item.title}</span>
                                    <p>{item.price}$</p>
                                    <button
                                        className="cart-btn rounded p-2 text-white mt-1 border-none text-capitalize d-flex justify-content-between align-items-center"
                                        onClick={() => addToCart(item)}>
                                        <FontAwesomeIcon
                                            style={{marginRight: "5px"}}
                                            icon={faCartShopping} />
                                        addToCart
                                    </button>
                                </div>
                            )
                        })}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;