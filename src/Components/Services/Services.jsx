import { Link } from "react-router-dom";
import chair from "./serv.jpg";
import "./style.css"
function Services() {
    return (
        <div className="serv">
            <div className="container">
                <div className="info">
                    <h4>get awesome product</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab possimus aperiam nihil, sapiente explicabo sint nisi fugit laborum praesentium assumenda quibusdam! Cumque esse aspernatur laborum, earum quis delectus deleniti non?
                    </p>
                <Link to='product'>see all product</Link>
                </div>
                <img src={chair} alt='' />
            </div>
        </div>
    )
}

export default Services;