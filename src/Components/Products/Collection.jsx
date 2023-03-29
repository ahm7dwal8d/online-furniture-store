import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button"


function Collection() {
    const [state, setState] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:3000/collection-product").then((res) => {
            setState(res.data)
        })
    }, [])
    const handleClick = (dir) => {
        if (dir === "left") {
            setSliderIndex(sliderIndex - 1)
        } else {
            setSliderIndex(sliderIndex + 1)
        }
    }
    return (
        <div className="collection">
            <div className="container">
                <div className="collection-head">more collection</div>
                <div className="collection-wrap">
                    <div className="btn">
                        {sliderIndex > 0 && (
                            <button
                                className="right-btn"
                                onClick={() => handleClick("left")}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                        )}
                        {sliderIndex < 3 && (
                            <button
                                className="left-btn"
                                onClick={() => handleClick("right")}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        )}
                    </div>
                <div className="collection-content" style={{transform: `translateX(${sliderIndex * -100}vw)`}}>
                    {state?.map((item) => {
                        return (
                            <div className="collection-product" key={item.id}>
                                <img src={item.images} alt="" />
                                <h5>{item.prices}$</h5>
                                <h5>{item.head}</h5>
                                <p>{item.body}</p>
                                <button className="add-cart">
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        style={{marginRight: "10px"}} />
                                    <span>add to cart</span>
                                </button>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
                    <Button value='view all' link='Product' width='20px auto'/>
        </div>
    )
}

export default Collection;