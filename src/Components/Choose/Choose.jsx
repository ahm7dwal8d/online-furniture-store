import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css"

function Choose() {
    const [choose, setChoose] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/choose").then((res) => {
            setChoose(res.data)
        })
    }, [])
    return (
        <div className="choose">
            <div className="container">
                <div className="choose">
                    <div className="choose-head">why choose us</div>
                    <ul className="p-0 mt-4">
                        {choose.choose?.map((item) => {
                            return (
                                <li key={Math.random() * 10}>
                                    <div className="info">
                                        <div
                                            className="icon"
                                            style={{marginRight: "10px"}}>
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                />
                                    </div>
                                        <h5>{item.head}</h5>
                                    </div>
                                        <p>{item.body}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="popular">
                    <div className="pop-head">most popular</div>
                    <ul>
                        {choose.popular?.map((item) => {
                            return (
                                <li key={Math.random() * 10}>
                                    <img
                                        src={item.image}
                                        alt=""
                                        style={{marginRight: "10px"}}/>
                                    <h5 className="fs-lg-4 fs-md-5 fs-sm-6">{item.head}</h5>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>
            </div>
    )
}

export default Choose;