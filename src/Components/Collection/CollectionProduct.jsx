import { Link } from "react-router-dom";


function CollectionProduct(props) {
    const { product } = props;
    console.log(product)
    return (
        <div className="product">
            <img
                src={product.image}
                className="w-50 rounded"
                alt=""
            />
            <div className="info mt-3">
                <h5 className="fs-6">{product.title}</h5>
                <h6 className="text-capitalize opacity-50">{product.category}</h6>
                <h6>{product.price}$</h6>
                <p className="lh-sm">{product.description}</p>
            </div>
            <Link
                to={`/collection/${product.id}`}
                className="pe-3 ps-3 pt-2 pb-2 text-decoration-none text-white rounded"
                style={{backgroundColor: '#772727'}}
            >Buy</Link>
        </div>
    )
}

export default CollectionProduct;