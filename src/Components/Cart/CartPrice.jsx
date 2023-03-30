

function CartPrice(props) {
    const { price } = props;
    return (
        <p className="fs-4 m-0">{price}$</p>
    )
}

export default CartPrice;