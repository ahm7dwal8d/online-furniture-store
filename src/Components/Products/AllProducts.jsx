import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";



function AllProducts() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setState(res.data.products)
        })
    }, [])
    return (
        <div className="product mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <Product items={state} />
                </div>
            </div>
        </div>
    )
}

export default AllProducts;