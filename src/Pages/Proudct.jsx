import AllProducts from "../Components/Products/AllProducts";
import Slide from "../Components/Slider/slide";


function Product() {
    document.title = "Products Page"
    return (
        <>
            <Slide />
            <AllProducts />
        </>
    )
}

export default Product;