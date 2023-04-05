import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/createContext";

function HomeProduct() {
    const [state, setState] = useState({})
    const { addToCart } = useContext(AppContext);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setState(res.data)
        })
    }, [])
    document.title = state.title
    console.log(state)
    return (
        <div className={`${state.title} mt-4 mb-4 container`}>
            <img
                src={state.image}
                className="rounded"
                style={{width: '60%'}}
                alt=""
            />
            <div className="info">
                <h5>{state.title}</h5>
                <h6 className="opacity-50 textcapitalize">{state.category}</h6>
                <p>{state.description}</p>
                <h5>{state.price}</h5>
            </div>
            <button
                className="btn btn-primary text-capitalize"
                onClick={() => addToCart(state)}
            >addToCart</button>
            <Link
                to='/'
                className="text-capitalize d-block mt-2">redirect to home page</Link>
        </div>
    )
}

export default HomeProduct;