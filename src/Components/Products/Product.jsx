import ProductHead from "./ProductHead";
import ProductImg from "./ProductImg";
import ProductPrice from "./ProductPrice";
import ProductOperation from "./ProductOperation"

function Product(props) {
    const { items } = props;
    console.log(items)
    return (
        <>
            {items?.map((item) => {
                return (
                    <div className="item col-lg-3 col-md-4 col-sm-12 mt-4" key={item.map}>
                        <ProductImg img={item.images} />
                        <ProductHead head={item.head} />
                        <ProductPrice price={item.prices} />
                        <ProductOperation item={items} />
                    </div>
                )
            })}
        </>
    )
}

export default Product;