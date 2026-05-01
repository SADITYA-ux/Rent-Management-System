import React from "react";
import { Link } from "react-router-dom";
import '../style/Navbar.css';

export default function Navbar()
{
    return(
        <nav className="navbar">
            <Link to='/' className="logo">🏢Apartment_Managment</Link>

        <ul className="nav-links">
            <li><Link to='/' className="nav-link">Home</Link></li>
            <li><Link to='/info' className="nav-link">Info</Link></li>
            <li><Link to='/form' className="nav-link">Form</Link></li>
            <li><Link to='/dashboard' className="nav-link">Dashboard</Link></li>
        </ul>
        </nav>
    )
}