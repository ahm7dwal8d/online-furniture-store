import "./style.css"
import TopHeader from "./TopHeader";
import HeaderInfo from "./HeaderInfo";
import NavBar from "./NavBar";

function Header() {
    return (
        <div className="header">
            <TopHeader />
            <HeaderInfo />
            <NavBar />
        </div>
    )
}

export default Header;