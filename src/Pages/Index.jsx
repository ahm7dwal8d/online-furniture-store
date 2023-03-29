import Slider from "../Components/Slider/Slider";
import Services from "../Components/Services/Services"
import Products from "../Components/Products/Products";
import FeatureProduct from "../Components/Products/FeatureProduct";
import Choose from "../Components/Choose/Choose";
import Collection from "../Components/Products/Collection";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

function Index() {
    document.title = "Home"
    return (
        <>
            <Slider />
            <Services />
            <Products />
            <FeatureProduct />
            <Choose />
            <Collection />
            <Contact />
            <Footer />
        </>
    )
}

export default Index;