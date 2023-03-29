import AboutTop1 from "./About-top-1.jpg";
import AboutTop2 from "./About-top-2.jpg";
import Video from "./About.mp4";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faTag, faGift, faHeadphones, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useRef } from "react";


function AboutSection() {
    const videoRef = useRef();
    const iconRef = useRef()
    const handleClick = () => {
        console.log(videoRef)
        videoRef.current.controls = true;
        videoRef.current.autoplay = true;
        iconRef.current.classList.add("active")
    }
    return (
        <div className="about">
            <div className="container">
                <div className="about-head">about us</div>
                <div className="about-top">
                    <div className="info">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate, veritatis blanditiis totam iste maiores delectus consectetur deserunt itaque veniam ex suscipit, perspiciatis, voluptatum neque iusto? Saepe ex, rerum rem fugit dolorum quae officia ipsum accusamus optio, molestiae error fuga?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae assumenda est recusandae quasi illum molestiae aliquid quibusdam eum dolorum?</p>
                        <button>learn more</button>
                    </div>
                    <div className="img">
                        <img src={AboutTop1} style={{marginRight: "5px"}} alt="" />
                        <img src={AboutTop2} alt="" />
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="video">
                        <div
                            className="icon"
                            ref={iconRef}
                            onClick={handleClick}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                        <video
                            src={Video}
                            ref={videoRef}
                            muted
                        ></video>
                    </div>
                        <div className="info">
                            <div className="about-head">why choose relaxo</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit placeat doloremque quae quasi quidem impedit iure modi beatae deleniti eveniet dignissimos veniam distinctio eius recusandae libero eos laboriosam reiciendis, eum quas nam consectetur molestias!
                            </p>
                            <div className="row">
                                <div className="box col-lg-6 col-md-6 col-sm-6 mt-4">
                                    <FontAwesomeIcon icon={faTruckFast} />
                                    <h5>fast delivery</h5>
                                </div>
                                <div className="box col-lg-6 col-md-6 col-sm-6 mt-4">
                                    <FontAwesomeIcon icon={faTag} />
                                    <h5>affordable price</h5>
                                </div>
                                <div className="box col-lg-6 col-md-6 col-sm-6 mt-4">
                                    <FontAwesomeIcon icon={faGift} />
                                    <h5>high quality</h5>
                                </div>
                                <div className="box col-lg-6 col-md-6 col-sm-6 mt-4">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                    <h5>100% support</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutSection;