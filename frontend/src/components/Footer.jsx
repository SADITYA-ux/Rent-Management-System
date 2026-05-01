import React from "react";
import { Link } from "react-router-dom";
import '../style/Footer.css';

export default function Footer()
{
    return(
        <footer className="footer">
    <div className="footer-section">
        <h3>Apartment Management</h3>
        <p>Efficient rent and tenant management system for modern living.</p>
    </div>

    <div className="footer-section">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/form">Form</Link>
    </div>

    <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:sadityaadhikari@gmail.com">sadityaadhikari@gmail.com</a></p>
        <p>Phone: 9813462408</p>
    </div>
</footer>
    )
}