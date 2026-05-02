import React , {useState , useEffect} from "react";
import "../style/Infopage.css";

export default function InfoPage()
{
    const [apartments , setApartments ] = useState([]);
    const [tenants , setTenants ] = useState([]);
    const [payments , setPayments ] = useState([]);

    useEffect ( () => 
    {
        fetch("http://localhost:5000/apartments")
        .then( res => res.json() )  // convert response to JSON
        .then ( data => setApartments(data) )// save to state

        fetch("http://localhost:5000/tenants")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setTenants(data) )  // save to state

        fetch("http://localhost:5000/payments")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setPayments(data) )  // save to state
    },[]);

    return(
        <div className = "info-page">
            
           < div className = "heading">
            <h1>Apartment Management System - Information</h1>
            <p>
                This system allows you to manage your apartments, tenants, and payments efficiently.
                You can view apartment details, tenant information, and payment history all in one place.
            </p>
            </div>

           <div className = "stats-container">
                <div className = "stats-section">
                    <h2>Total Apartments:</h2>
                    <p>{apartments.length}</p>
                </div>

                <div className = "stats-section">
                    <h2>Vacant Apartments:</h2>
                    <p>{ apartments.filter( apt => apt.status === "vacant" ).length}</p>
                </div>

                <div className = "stats-section">
                    <h2>Occupied Apartments:</h2>
                    <p>{ apartments.filter( apt => apt.status === "occupied" ).length}</p>
                </div>

                <div className = "stats-section">
                    <h2>Total tenants:</h2>
                    <p>{tenants.length}</p>
                </div>

                <div className = "stats-section">
                    <h2>30 days remaining Lease:</h2>
                    <p>{tenants.filter ( t => 
                        {
                            const today = new Date();
                            const leaseEnd = new Date(t.lease_end);
                            const timeDiff = leaseEnd.getTime() - today.getTime();
                            const daysDiff = timeDiff / (1000 * 3600 * 24);
                            return daysDiff > 0 && daysDiff <= 30;
                        }
                    ).length}</p>
                </div>
           </div>

           <div className="info-bottom">
                <div className="info-box">
                    <h2>About the System</h2>
                    <p>
                        This rent management system is designed to simplify the process of managing
                        apartments, tenants, and payments. It provides a centralized platform where
                        all essential information is easily accessible.
                    </p>
                </div>

                <div className="info-box">
                    <h2>Why It Matters</h2>
                    <p>
                        Managing rental properties can be complex, but this system helps streamline
                        operations by keeping track of occupancy, lease durations, and payment history,
                        ensuring efficiency and transparency.
                    </p>
                </div>
            </div>
        </div>
    )
}