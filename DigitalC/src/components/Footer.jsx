import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <ul className="socail-media-link">
                <li>
                    <a href="https://linkedin.com/in/rao-imtinan-2b9ab8264" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/imtinan32" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
