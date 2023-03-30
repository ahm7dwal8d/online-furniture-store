import { memo } from "react";
import Button from "../Button"
import "./style.css";

function Slide() {
    return (
        <div className="slide">
            <div className="container">
                <h1>creating custom interiors</h1>
                <h5>we have been designing amazingly cozy interiors since 2000</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, a accusamus dignissimos vero amet ut tenetur ratione beatae ex assumenda numquam at repudiandae, cupiditate voluptate totam aut odit placeat ipsum.
                </p>
                <Button link='Product' value='EXPLORE STORE'/>
            </div>
        </div>
    )
}

export default memo(Slide);