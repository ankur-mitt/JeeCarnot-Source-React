import React from "react";
import "./MentorProfiles.css";

function SingleProfile() {
    return (
        <div className="column is-half profile-container" data-aos="slide-up" data-aos-easing="ease-in-sine" data-aos-duration="1100" >
            <div className="columns is-mobile">
                <div id="profile-data-box" className="column is-8">
                    <table><tbody>
                        <tr>
                            <td className="table-parameter">Name:</td>
                            <td className="table-value"><em>Ankur Mittal</em></td>
                        </tr>
                        <tr>
                            <td className="table-parameter">Branch:</td>
                            <td className="table-value"><em>Mechnical Engineering</em></td>
                        </tr>
                        <tr>
                            <td className="table-parameter">JEE Rank:</td>
                            <td className="table-value"><em>1111</em></td>
                        </tr>
                    </tbody></table>
                    <span className="table-text">
                        <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quaerat, non! A, delectus. Numquam iure vel atque aliquam esse mollitia ullam!</em>
                    </span>
                </div>
                <div id="avatar-box" className="column is-4">
                    <img className="avatar-image" src="/imgs/Avatar-Female.jpg" alt="mentor"/>
                </div>
            </div>
        </div>
    );
}

/**
 * react mentor-profiles component
 */
function MentorProfiles() {
    return (
        <div id="bg-wooden">
        <center><div id="mentor-profiles" className="mentor-profiles">
            <center><h3 className="is-size-3"><span id="meet-mentors">Meet Your Mentors</span></h3></center>

            <center><div className="columns is-multiline">

                <SingleProfile />
                <SingleProfile />
                <SingleProfile />
                <SingleProfile />
                <SingleProfile />

            </div></center>

            <button className="button is-rounded profiles-register">
                <span className="register-profile-text">Register</span>
                <img id="register-icon" src="/imgs/register-icon.png" alt="register-icon" />
            </button>
        </div></center>
        </div>
    );
}

export default MentorProfiles;