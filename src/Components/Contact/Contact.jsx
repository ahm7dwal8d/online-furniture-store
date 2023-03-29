import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./style.css";


function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h5>keep updated & unlimited discount</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis quis voluptas totam, odit illum sed voluptate tempore, eos modi quidem sint cupiditate iste dolorem quasi perspiciatis, alias corporis quibusdam!</p>
                <form action="">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address Here"
                    />
                    <button type="submit">
                        <FontAwesomeIcon 
                            icon={faPaperPlane} 
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;