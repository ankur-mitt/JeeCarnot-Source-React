import React from "react";
import "./Footer.css";

/**
 * react footer component
 */
function Footer() {
    return (
        <div id="footer" className="footer" data-aos="slide-up" data-aos-easing="ease-in-out-cubic">
            <div className="columns">
                <div className="column">
                    <div className="columns is-mobile">
                        <div className="column is-4 contact-us">
                            <center><h3>Contact Us</h3></center>
                            <center><hr /></center>
                        </div>
                        <div className="column is-8 contact-us-text">
                            <a href="http://www.facebook.com">
                                <img src="/imgs/facebook-icon.png" alt="facebook-link" />
                            </a>
                            <a href="http://www.instagram.com">
                                <img src="/imgs/instagram-icon.jpg" alt="instagram-link" />
                            </a>
                            <a href="http://www.whatsapp.com">
                                <img src="/imgs/whatsapp-icon.png" alt="whatsapp-link" />
                            </a>
                            <br />
                            jeecarnot@facebook.com
                            <br />
                            jeecarnot@gmail.com
                            <br />
                            <b>Ph:</b> +919988776655
                            <br />
                            <b>Address:</b> S. Vishveshwarya Block,
                            <br />
                            INDIAN INSTITUTE OF TECHNOLOGY, ROPAR, PUNJAB.
                            <br />
                            PB - 123456.
                            <br />
                        </div>
                    </div>
                </div>
                <div className="column" />
            </div>
            <center><span id="footer-end-credits">
                Designed and Developed by Technical Team JEECarnot.
                <br />
                ©2020. All Rights Reserved.
            </span></center>
        </div>
    );
}

export default Footer;