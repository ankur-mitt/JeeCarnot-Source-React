import React from "react";
import "./Mlanding.css";

/**
 * react mentorship-landing-view component
 */
function Mlanding() {
    return (
        <div id="is-white">
            <div id="mentorship-landing-image" className="mentorship-landing-image" />
            <h1 className="is-size-1 is-size-3-touch heading" data-aos="zoom-out" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                we fetch maximum efficiency
            </h1>
            <h4 className="is-size-4 is-size-5-mobile heading-text" data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration="1000">
                <em>
                    we will connect to you an iitian who will be your friend throughout your jee journey.
                    we will connect to you an iitian who will be your friend throughout your jee journey.
                </em>
            </h4>
            <center>
                <div id="blue-button" className="blue-button">
                    <button className="button is-rounded view-profiles-button">
                        View Profiles
                        <img id="profiles-icon" src="/imgs/profiles-icon.png" alt="profiles-icon" />
                    </button>
                </div>
            </center>
            <br/>
        </div>
    );
}

export default Mlanding;