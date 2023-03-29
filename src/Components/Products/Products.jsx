import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css"

function Products() {
    const [cate, setCate] = useState([])
    const [product, setProduct] = useState([]);
    const [state, setState] = useState(10);
    const [addCart, setAddCart] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:3000/cagegory").then((res) => {
            setCate(res.data)
        })
        axios.get(`http://localhost:3000/products?_limit=${state}`).then((res) => {
            setProduct(res.data)
        })
    }, [])
    return (
        <div className="product">
            <div className="container row">
                <div className="category me-4 col-lg-4 col-md-12 col-sm-12">
                    <ul>
                    <h5 className="category-head">categories</h5>
                        {cate?.map((item) => {
                            return (
                                <li key={Math.random() * 10}>{item}</li>
                            )
                        })}
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
                        {product.map((item) => {
                            return (
                                <div className="product col-lg-4 col-md-6 col-sm-12 mt-4" key={item.id}>
                                    <div className="img">
                                        <img 
                                            className='w-75'
                                            src={item.images}
                                            alt=''
                                        />
                                    </div>
                                    <div className="info">
                                        <h5>{item.head}</h5>
                                        <div className="price">
                                            <span style={{marginRight: "10px"}}><del>{item.prices.del}</del></span>
                                            <span>  {item.prices.price}$</span>
                                        </div>
                                    </div>
                                    <button
                                        className="add-to-cart w-100">
                                        <FontAwesomeIcon 
                                            icon={faCartShopping}
                                            style={{marginRight: "10px"}} />
                                        buy
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