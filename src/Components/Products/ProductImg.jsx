

function ProductImg(props) {
    const { img } = props;
    return (
        <>
            <img
                className="w-100 rounded"
                src={img}
                alt=''
            />
        </>
    )
}

export default ProductImg;