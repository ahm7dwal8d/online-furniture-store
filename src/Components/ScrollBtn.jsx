import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

function ScrollButton() {
    const btn = useRef()
    window.onscroll = () => {
        if (window.scrollY > 800) {
            btn.current.classList.add("active")
        } else {
            btn.current.classList.remove("active")
        }
    }
    const PageScroll = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <button
                    className="to-top"
                    ref={btn}
                    onClick={PageScroll}>
                <FontAwesomeIcon
                    icon={faArrowUpLong}
                />
            </button>
        </>
    )
}

export default ScrollButton;