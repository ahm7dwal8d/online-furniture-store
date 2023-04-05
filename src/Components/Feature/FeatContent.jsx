import axios from "axios";
import { useState, useEffect } from "react";
import FeatList from "./FeatList"
import FeatProduct from "./FeatProduct";
import { Link } from "react-router-dom";


function FeatContent() {
    const [list, setList] = useState([])
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            setList(res.data)
        })
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProduct(res.data)
        })
    }, [])
    const fliter = (cate) => {
        axios.get(`https://fakestoreapi.com/products/category/${cate}`).then((res) => {
            setProduct(res.data)
        })
    }
    return (
        <div className="feature-main mt-4">
            <div className="container">
                <ul className="p-0 m-0 d-flex justify-content-center">
                    {list?.map((li) => {
                        return (
                            <FeatList list={li} fliter={fliter} />
                        )
                    })}
                </ul>
                <div className="row mt-4">
                    {product?.map((item) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <FeatProduct product={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link to='/'
                className="text-capitalize text-white p-2 rounded text-decoration-none mt-3 ms-auto me-auto d-block d-flex justify-content-center"
                style={{backgroundColor: 'rgb(119, 39, 39)', width: '200px'}}
            >
                Redirect to home page
            </Link>
        </div>
    )
}

export default FeatContent;