import { Link } from "react-router-dom";

function Button(props) {
    const { value, link, width } = props;
    const styled = {
        backgroundColor: "#772727",
        color: "#fff",
        textDecoration: "none",
        padding: "10px",
        textTransform: "capitalize",
        width: width !== null && "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: width,
        borderRadius: "4px"
    }
    return <Link
        to={link}
        style={styled}>{value}</Link>
}

export default Button;