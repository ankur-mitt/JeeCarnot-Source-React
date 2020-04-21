import React from "react";
import "./Navbar.css";
import StartBar from "./StartBar";

/**
 * react navbar component
 */
function Navbar() {
    return (
        <nav id="nav-bar" className="nav-bar is-fixed-top">
            <StartBar />
            <img id="brand-is-left" src="/imgs/brand.png" alt="jee-carnot-logo" />
            <span id="register-button" className="register-button">
                <button className="button is-rounded is-small">
                    Register
                    <img id="register-icon" src="/imgs/register-icon.png" alt="register-icon" />
                </button>
            </span>
        </nav>
    );
}

export default Navbar;