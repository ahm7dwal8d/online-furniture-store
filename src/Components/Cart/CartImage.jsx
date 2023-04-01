

function CartImage(props) {
    const { img, thumbnail } = props;
    console.log(img, thumbnail)
    return (
        <img src={img || thumbnail} className='w-25 rounded' alt='' />
    )
}

export default CartImage;