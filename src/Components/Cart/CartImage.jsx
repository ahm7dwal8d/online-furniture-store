

function CartImage(props) {
    const { img } = props;
    return (
        <img src={img} className='w-25 rounded' alt='' />
    )
}

export default CartImage;