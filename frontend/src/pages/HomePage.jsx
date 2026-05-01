import React, {useState , useEffect} from "react";
import "../style/Homepage.css";

export default function HomePage()
{
    const [apartments , setApartments ] = useState([]);
    const [tenants , setTenants ] = useState([]);

    useEffect ( () =>
    {
        fetch("http://localhost:5000/apartments")
        .then( res => res.json() )  // convert response to JSON
        .then( data => setApartments(data) )// save to state")

        fetch("http://localhost:5000/tenants")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setTenants(data) )  // save to state")
    },[]);

    return(
        <div className = "home-page">

            <div className = "heading">
                <h1>Welcome to the Apartment Management System</h1>
                <p>Manage your apartments and tenants with ease.</p>
            </div>

            <div className="apartment-stats">

                <div className="stat-card">
                    <h2>Total Apartments</h2>
                    <p>{apartments.length}</p>
                </div>

                <div className="stat-card">
                    <h2>Occupied Apartments</h2>
                    <p>{apartments.filter(apt => apt.status === "occupied").length}</p>
                </div>

                <div className="stat-card">
                    <h2>Vacant Apartments</h2>
                    <p>{apartments.filter(apt => apt.status === "vacant").length}</p>
                </div>

            </div>

            <div className="info-section">
                <div className="info-card">
                    <h2>About Our Apartments</h2>
                        <p>
                            Our apartments are designed for comfort and convenience, offering
                            modern living spaces, secure environments, and a peaceful community.
                            We prioritize cleanliness, safety, and a high-quality living experience.
                        </p>
                </div>

            <div className="info-card">
                <h2>Why Choose Us</h2>
                    <p>
                        We provide reliable rent management, quick maintenance response,
                        and transparent communication. Our system ensures everything runs
                        smoothly for both tenants and management.
                    </p>
            </div>

            <div className="info-card">
                <h2>Our Staff</h2>
                    <p>
                        Our dedicated staff is friendly, professional, and always ready to help.
                        From maintenance to management, we ensure fast support and a hassle-free experience.
            </p>
                </div>
            </div>
        </div>
    )
}