import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import { AppContext } from "../../context/createContext";



function AllProducts() {
    const [state, setState] = useState([]);
    const [cate, setCate] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setState(res.data.products);
        })
        axios.get("https://dummyjson.com/products/categories").then((res) => {
            setCate(res.data)
        })
    }, [])
    const filterItems = (item) => {
        axios.get(`https://dummyjson.com/products/category/${item}`).then((res) => {
            setState(res.data.products)
        })
    }
    const { theme } = useContext(AppContext);
    return (
        <div className="product mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 mt-4">
                        <ul className="p-0 m-0 list-group" style={{backgroundColor: theme === 'dark' ? '#1A1A1A' : '#fff'}}>
                            {cate?.map((item) => {
                                return (
                                    <li
                                        className="list-group-item list-group-item-action"
                                        style={{ cursor: 'pointer', backgroundColor: theme === 'dark' ? '#1A1A1A' : '#fff', color: theme === 'dark' ? '#fff' : '#000', borderColor: theme === 'dark' ? '#fff' : '#000'}}
                                        onClick={() => filterItems(item)}
                                    >{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-10 col-sm-12 mt-4">
                        <div className="row">
                            <Product items={state} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts;