import React from "react";
import "./Cards.css";

/**
 * react single-card component
 * this is a demo-component for cards
 */
/*
function SingleCard() {
    return (
        <div className="column is-4 card" data-aos="slide-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-cubic" data-aos-duration="750">
            <center><h1 className="card-heading">WHY CHOOSE US ?</h1></center>
            <center><img src="/imgs/mentorship.jpg" alt="why-choose-us" className="card-image"/></center>
            <center>
            <h6 className="card-text">
                We will connect to you an IITian who will be
                your friend throughout your jee journey. You
                can connect him 24X7 on-call or WhatsApp for... 
            </h6>
            </center>
        </div>
    );
}
*/

/**
 * react cards component
 */
function Cards() {
    return (
        <div id="cards" className="cards">
            <div className="columns">


                <div className="column is-4 card" data-aos="slide-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-cubic" data-aos-duration="750">
                    <center><h1 className="card-heading">WHAT WE OFFER ?</h1></center>
                    <center><img src="/imgs/what-we-offer.jpg" alt="what-we-offer" className="card-image"/></center>
                    <center>
                    <h6 className="card-text">
                        we will offer you many things 
                        we will offer you many things 
                        we will offer you many things 
                        we will offer you many things...
                    </h6>
                    </center>
                </div>
                <div className="column is-4 card" data-aos="slide-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-cubic" data-aos-duration="750">
                    <center><h1 className="card-heading">WHY CHOOSE US ?</h1></center>
                    <center><img src="/imgs/why-choose-us.jpg" alt="why-choose-us" className="card-image"/></center>
                    <center>
                    <h6 className="card-text">
                        we will show you the right path the right way 
                        we will show you the right path the right way 
                        we will show you the right path the right way 
                        we will show you the right path the right way...
                    </h6>
                    </center>
                </div>
                <div className="column is-4 card" data-aos="slide-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-cubic" data-aos-duration="750">
                    <center><h1 className="card-heading">WE ARE THE RIGHT GUIDES !</h1></center>
                    <center><img src="/imgs/we-are-the-right-guides.png" alt="we-are-the-right-guides" className="card-image"/></center>
                    <center>
                    <h6 className="card-text">
                        we have also faced the same ups and downs as you
                        we have also faced the same ups and downs as you
                        we have also faced the same ups and downs as you
                        we have also faced the same ups and downs as you...
                    </h6>
                    </center>
                </div>


            </div>
        </div>
    );
}

export default Cards;