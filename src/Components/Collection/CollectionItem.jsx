import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/createContext";
import axios from "axios";

function CollectionItem() {
    const [state, setState] = useState({})
    const { id } = useParams();
    const { addToCart } = useContext(AppContext);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setState(res.data);
        })
    }, [])
    document.title = state.title;
    console.log(state)
    return (
        <div className={`${state.title} mt-4`}>
            <div className="container">
                <img
                    className="w-50"
                    src={state.image}
                    alt=""
                />
                <div className="info mt-3 mb-3">
                    <h5 className="fs-6">{state.title}</h5>
                    <h6 className="opacity-50">{state.category}</h6>
                    <h6>${state.price}$</h6>
                </div>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => addToCart(state)}
                >
                    addToCart
                </button>
                <Link
                    to='/'
                    className="text-capitalize d-block mb-3"
                >redirect to home page</Link>
            </div>
        </div>
    )
}

export default CollectionItem;