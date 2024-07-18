/*eslint-disable*/

import React from "react";
import profile from './dp.jpg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="profile-section">
                <img src={profile} alt="Profile" className="profile-img" />
                <div className="profile-info">
                    <h2 className="profile-name">Rao Imtinan</h2>
                    <h4 className="profile-title">Junior MERN Stack Developer</h4>
                    <a href='mailto:r.imtinan38@gmail.com' className="profile-email">r.imtinan38@gmail.com</a>
                </div>
            </div>
            <ul className="contact-buttons">
                <li>
                    <a href="mailto:r.imtinan38@gmail.com">
                        <button className="email-button">Email</button>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/rao-imtinan-2b9ab8264" target="_blank" rel="noopener noreferrer">
                        <button className="linkedin-button">LinkedIn</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
