import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";



function AllProducts() {
    const [state, setState] = useState([])
    const [num, setNum] = useState(1);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            setState(res.data)
        })
    }, [])
    console.log(state)
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