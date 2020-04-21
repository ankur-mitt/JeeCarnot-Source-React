import React from "react";
import "./Divider.css";

/**
 * react 3-hr-divider component
 */
function Divider() {
    return (
        <section className="section">
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <div id="three-hr-divider" className="three-hr-divider">
                        <center><hr id="one" /></center>
                        <center><hr id="two" /></center>
                        <center><hr id="three" /></center>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Divider;