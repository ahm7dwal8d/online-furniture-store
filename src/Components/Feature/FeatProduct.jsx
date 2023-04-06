import { Link } from "react-router-dom";


function FeatProduct(props) {
    const { product } = props;
    return (
        <div className="item mt-4">
            <img
            src={product.image}
            className="w-50 rounded"
            alt=""
        />
            <div className="info mt-2">
                <h5 className="fs-6">{product.title}</h5>
                <h6 className="opacity-50 text-capitalize">{product.category}</h6>
                <h6>{product.price}$</h6>
                <p>{product.description}</p>
            </div>
            <Link
            to={`/Home/${product.id}`}
            className='btn text-white w-25 d-flex justify-content-center'
            style={{
                backgroundColor: '#772727'
                }}>
                Buy</Link>
        </div>
    )
}

export default FeatProduct;