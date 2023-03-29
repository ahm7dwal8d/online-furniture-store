import Slide from "../Components/Slider/slide";
import AboutSection from "../Components/About/About";
import Team from "../Components/About/Team";


function About() {
    document.title = "About Us"
    return (
        <>
            <Slide />
            <AboutSection />
            <Team />
        </>
    )
}

export default About;