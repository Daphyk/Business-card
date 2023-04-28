import React from "react"
import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                The Ayubs
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                theayubs.com
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} alt="" className="email" />Email
            </button>
            <button className="main--btn btn--linkedin">
                <img src={linkedinLogo} alt="" className="linkedin"/>LinkedIn
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

        </div>
    )
}