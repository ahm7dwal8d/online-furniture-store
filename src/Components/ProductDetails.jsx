import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
    console.log(product)
    return (
        <div className="container pt-5 pb-5">
            {product !== null && (
                <div className="product">
                    <img
                        className="rounded h-25"
                        style={{width: '100%'}}
                        src={img === null ? product.thumbnail : img }
                        alt="" />
                    <div className="img">
                        {product.images && (
                            product.images.map((img) => {
                                return <img
                                    onClick={() => setImgs(img)}
                                    className="rounded mt-3"
                                    style={{width: "70px", marginRight: "5px", cursor: "pointer"}}
                                    src={img}
                                    alt=''
                                    key={Math.random() * 4} />
                            })
                        )}
                        </div>
                        <div className="info mt-3">
                            <h5>{product.title}</h5>
                            <h6 className="opacity-50">{product.category} &  {product.brand}</h6>
                            <p className="mb-1">{product.description}</p>
                            <h6 className="mb-3 mt-1">{product.price}$</h6>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary text-capitalize"
                        >addToCart</button>
                    <Link
                        to='/Product'
                        className="text-capitalize mt-2 d-block">redirect to products page</Link>
                </div>
            )}
        </div>
    )
}

export default ProductDetails;