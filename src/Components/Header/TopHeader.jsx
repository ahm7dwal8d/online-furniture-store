import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";

function TopHeader() {
    const [login, setLogin] = useState(false);
    const [sign, setSign] = useState(false);
    const replace = () => {
        setLogin(false)
        setSign(true)
    }
    return (
        <div className="top-header">
        <div className="container">
            <div className="location">
                <FontAwesomeIcon
                    icon={faLocationArrow}
                    style={{marginRight: "5px"}}>
                </FontAwesomeIcon>
                15 Bourke Street Melbourne
            </div>
            <div className="btn">
                <button
                    className="login-btn"
                    onClick={() => setLogin(!login)}>
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{marginRight: "5px"}}>
                    </FontAwesomeIcon>
                    login
                    </button>
                <button
                    className="register-btn"
                    onClick={() => setSign(!sign)}>
                    <FontAwesomeIcon
                        icon={faUserAlt}
                        style={{marginRight: "5px"}}>
                    </FontAwesomeIcon>
                    register
                    </button>
                </div>
            </div>
            {login && (
            <div className="login">
                    <div className="container">
                        <span
                            className="close-btn"
                            onClick={() => setLogin(false)}>
                            x</span>
                    <form action="">
                        <label className="form-head">login</label>
                        <input
                            type="text"
                                placeholder="Username/ E-mail Address"
                                className="form-input"/>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input"/>
                            <button
                                type="submit"
                                className="submit-btn"
                            >login</button>
                    </form>
                    <a href="/forget">Forget Your Password?</a>
                    <hr />
                        <div className="links">
                            <button className="google-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>
                                Login With Google
                            </button>
                            <button className="facebook-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                Login With Facebook
                            </button>
                        </div>
                        <hr />
                        <button
                            className="register-btn"
                            onClick={replace}>register</button>
                </div>
            </div>
            )}
            {sign && (
                <div className="register">
                    <div className="container">
                        <span
                            className="close-btn"
                            onClick={() => setSign(false)}>x</span>
                        <form action="">
                            <label className="form-head">register</label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder="Frist Name"
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="form-input"
                            />
                            <label>Gender:</label>
                            <input type="radio" name="gender" id="male" value='male'/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" value='male'/>
                            <label htmlFor="female">Female</label>
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="form-input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-input"
                            />
                            <input
                                type="password"
                                placeholder="Comfirm Password"
                                className="form-input"
                            />
                            <input type="checkbox" name="" id="acc" />
                            <label htmlFor="acc">I Accept To The Terms And Condition</label>
                            <button className="submit-btn">register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TopHeader;