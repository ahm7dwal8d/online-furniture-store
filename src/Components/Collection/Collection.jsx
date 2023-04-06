import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CollectionProduct from "./CollectionProduct";
import CollectionList from "./CollectionList";

function Collection() {
    const [product, setProduct] = useState([]);
    const [cate, setCate] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProduct(res.data)
        })
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            setCate(res.data)
        })
    }, [])
    const filter = (cate) => {
        axios.get(`https://fakestoreapi.com/products/category/${cate}`).then((res) => {
            setProduct(res.data)
        })
    }
    return (
        <div className="collection">
            <div className="container">
                <ul className="p-0 m-0 d-flex justify-content-center">
                    {cate?.map((list) => {
                        return (
                            <CollectionList list={list} filter={filter} />
                        )
                    })}
                </ul>
                <div className="row">
                    {product?.map((item) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                                <CollectionProduct product={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link to='/'
                className="text-capitalize text-white p-2 rounded text-decoration-none mt-3 ms-auto me-auto d-block d-flex justify-content-center mb-3"
                style={{backgroundColor: 'rgb(119, 39, 39)', width: '200px'}}
            >
                Redirect to home page
            </Link>
        </div>
    )
}

export default Collection;