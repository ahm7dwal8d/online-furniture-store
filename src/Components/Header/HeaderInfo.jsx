import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HeaderInfo() {
    return (
        <div className="header-info">
        <div className="container">
            <div className="logo">
                <a href="#">
                    <FontAwesomeIcon 
                        icon={faChair}>
                        </FontAwesomeIcon>
                    <div className="info">
                        <h6>Relaxo</h6>
                        <p>online Furniture store</p>
                    </div>
                </a>
            </div>
            <div className="header-contact">
                <FontAwesomeIcon
                    icon={faPhone}>
                </FontAwesomeIcon>
                <div className="contact-info">
                    <h5>free call us</h5>
                    <p>Call:+123456789</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeaderInfo;