import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../context/createContext";

function ProductBtn(props) {
    const { addToCart } = useContext(AppContext);
    const style = {
        backgroundColor: "#772727",
        borderColor: "#772727"
    }
    const { item } = props;
    return (
        <div className="product-footer d-flex justify-content-between align-items-center">
            <div className="info d-flex align-items-center">
                <FontAwesomeIcon
                    icon={faTruckFast}
                    style={{ marginRight: "8px", fontSize: "25px" }} />
                <p
                    className="m-0 text-capitalize"
                >ships in 4 days
                </p>
            </div>
            <button
                className="w-25 rounded text-capitalize text-white"
                style={style}
                onClick={() => addToCart(item)}>
            buy</button>
        </div>
    )
}

export default ProductBtn;