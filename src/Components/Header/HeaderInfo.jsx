import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/createContext";

function HeaderInfo() {
    const { theme, Theme } = useContext(AppContext);
    return (
        <div className="header-info">
        <div className="container">
            <div className="logo">
                <Link to='/'>
                    <FontAwesomeIcon 
                        icon={faChair}>
                        </FontAwesomeIcon>
                    <div className="info">
                        <h6 style={{color: Theme[`${theme}`]['color']}}>Relaxo</h6>
                        <p style={{color: Theme[`${theme}`]['color']}}>online Furniture store</p>
                    </div>
                </Link>
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