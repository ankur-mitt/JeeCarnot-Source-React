import React from "react";
import "./ImportantMessage.css";

/**
 * react important-message component
 */
function ImportantMessage() {
    return (
        <div id="important-message" className="important-message">
            <center>
                <div className="quote-box" data-aos="zoom-in-up" data-aos-anchor-placement="center-center" data-aos-easing="linear" data-aos-duration="750">
                    <div className="columns">
                        <div className="column is-1" />
                        <div className="column is-7">
                            <h4 className="is-size-4" id="message-heading">
                                Important Message or Some New Developement
                            </h4>
                            <em id="message-text">
                                We will connect to you an IITian who will be your friend througout your jee journey.
                                We will connect to you an IITian who will be your friend througout your jee journey.
                            </em>
                        </div>
                        <div className="column is-3" id="message-graph">
                            <center>
                                <img className="image is-vcentered" src="/imgs/graph.png" alt="graph"/>
                            </center>
                        </div>
                        <div className="column is-1" />
                    </div>
                </div>
            </center>
        </div>
    );
}

export default ImportantMessage;