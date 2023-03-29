
function ProductPrice(props) {
    const { price } = props;
    return (
        <>
            <p><del>{price.del}</del> {price.price}</p>
        </>
    )
}

export default ProductPrice;