import React from "react";
import "./Preloader.css";

/**
 * react preloader component
 */
function Preloader() {
    return (
        <div id="pre-loader" className="pre-loader">
            <img className="main-logo" src="/imgs/main-logo.ico" alt="jee_carnot_main_logo" />
            <img className="loading-img" src="/imgs/loading.gif" alt="loading_gif" />
        </div>
    );
}

export default Preloader;