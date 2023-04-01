import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/createContext";

function ProductDetails() {
    const [product, setProduct] = useState('');
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            setProduct(res.data);
        })
    }, [])
    const [img, setImg] = useState(null);
    const setImgs = (imgs) => {
        setImg(imgs)
    }
    const { addToCart } = useContext(AppContext);
    return (
        <div className="container pt-5 pb-5">
            {product !== null && (
                <div className="product">
                    <img
                        className="rounded w-50"
                        src={img === null ? product.thumbnail : img }
                        alt="" />
                    <div className="img">
                        {product.images && (
                            product.images.map((img) => {
                                return <img
                                    onClick={() => setImgs(img)}
                                    className="rounded mt-3"
                                    style={{width: "150px"}}
                                    src={img}
                                    alt=''
                                    key={Math.random() * 4} />
                            })
                        )}
                        <div className="info mt-3">
                            <h5>{product.title}</h5>
                            <h6 className="opacity-50">{product.category} &  {product.brand}</h6>
                            <p>{product.description}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary text-capitalize"
                        >addToCart</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails;