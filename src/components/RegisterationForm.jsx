import React from "react";
import "./RegisterationForm.css";

/**
 * react registeration-form component
 */
function RegisterationForm() {
    return (
        <div id="registeration-form" className="registeration-form">
            <h1 className="is-size-4 is-size-5-mobile form-request">Please fill the below mentioned details :</h1>
            <center>
                <form action="/register" method="post">


                    <div className="control has-icons-left">
                        <label htmlFor="name">Your Name:</label>
                        <input className="input is-medium is-rounded" type="text" placeholder="Usian Bolt" name="name" id="name" />
                        <span className="icon is-left">
                            <i className="fas fa-envelope" />
                        </span>
                    </div>
                    <div className="control has-icons-left">
                        <label htmlFor="email">Your Email:</label>
                        <input className="input is-medium is-rounded" type="email" placeholder="usianbolt@gmail.com" name="email" id="email" />
                        <span className="icon is-left">
                            <i className="fas fa-envelope" />
                        </span>
                    </div>
                    <div className="control has-icons-left">
                        <label htmlFor="telephone">Your Phone Number:</label>
                        <input className="input is-medium is-rounded" type="tel" placeholder="9988776655" name="telephone" id="telephone" />
                        <span className="icon is-left">
                            <i className="fas fa-envelope" />
                        </span>
                    </div>
                    <button type="submit" className="button is-rounded profiles-register">
                        <span className="register-profile-text">Submit</span>
                        <img id="register-icon" src="/imgs/register-icon.png" alt="register-icon" />
                    </button>
                    

                </form>
            </center>
        </div>
    );
}

export default RegisterationForm;