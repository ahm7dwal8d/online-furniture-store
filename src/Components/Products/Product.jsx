import ProductHead from "./ProductHead";
import ProductImg from "./ProductImg";
import ProductPrice from "./ProductPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../context/createContext";

function Product(props) {
    const { items } = props;
    const { addToCart } = useContext(AppContext);
    const style = {
        backgroundColor: "#772727",
        borderColor: "#772727"
    }
    return (
        <>
            {items?.map((item) => {
                return (
                    <div className="item col-lg-3 col-md-4 col-sm-12 mt-4" key={item.id}>
                        <ProductImg img={item.thumbnail} />
                        <ProductHead head={item.title} />
                        <span className="opacity-50">{item.brand}</span>
                        <ProductPrice price={item.price} discounte={item.discountPercentage} />
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
                onClick={ () => addToCart(item)}>
            buy</button>
        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Product;