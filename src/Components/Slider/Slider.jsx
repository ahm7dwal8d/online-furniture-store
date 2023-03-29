import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import Button from "../Button";


function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0)
    const handleClick = (dir) => {
        if (dir === "left") {
            setSliderIndex(sliderIndex - 1)
        } else {
            setSliderIndex(sliderIndex + 1)
        }
    }
    return (
        <div className="slider">
            <div className="slider-wrap">
                <div className="btn">
                    {sliderIndex > 0 && (
                        <button
                            className="btn-right"
                            onClick={() => handleClick("left")}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    )}
                    {sliderIndex < 5 && (
                        <button
                            className="btn-left"
                            onClick={() => handleClick("right")}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    )}
                </div>
                <div className="slider" style={{transform: `translateX(${sliderIndex * -100}vw)`}}>
                    <div className="slide slide-1">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                    <div className="slide slide-2">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                    <div className="slide slide-3">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                    <div className="slide slide-4">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                    <div className="slide slide-5">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                    <div className="slide slide-6">
                        <div className="container">
                            <h1>New Arrivals The Sofa Deser</h1>
                            <p>up to 40% off on your custom Furniture design</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga officia facilis iusto. Alias, eaque incidunt magni labore sunt quasi! Dolores sed aperiam veritatis similique repudiandae ipsam obcaecati maiores est?
                            </p>
                            <Button value="shop Now" link="Product"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;