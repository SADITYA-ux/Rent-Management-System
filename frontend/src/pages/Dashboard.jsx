import React , { useState , useEffect } from 'react';
import ApartmentList from '../components/ApartmentList';
import TenantList from '../components/TenantList';
import PaymentList from '../components/PaymentList';
import StaffList from '../components/StaffList';
import "../style/Dashboard.css";

export default function Dashboard()
{
    const [ activeView , setActiveView ] = useState("home");

    const renderView = () =>
    {
        switch (activeView)
        {
            case "home" :
                  return (
                    <div className="home-page">
                    
                        <div className="heading">
                            <h1>Dashboard</h1>
                            <p>Select an option from the sidebar</p>
                        </div>
                            
                        <div className="info-section">
                            
                            <div className="info-card">
                                <h2>Apartments</h2>
                                <p>
                                    View and manage all apartment details,
                                    availability, and rent information.
                                </p>
                            </div>
                            
                            <div className="info-card">
                                <h2>Welcome</h2>
                                <p>
                                    Use the sidebar to navigate through the system.
                                </p>
                            </div>
                            
                        </div>
                            
                    </div>
                );

            case "apartments" :
                return <ApartmentList/>;
            
            case "tenants" :
                return <TenantList/>;

            case "payments" :
                return <PaymentList/>;

            case "staff" :
                return <StaffList/>;
        }
    }

    return(
        <div className="dashboard">

            <div className = "side-bar">
                <button onClick = { () => setActiveView("home")}>🏠</button>
                <button onClick = { () => setActiveView("apartments")}>🏬</button>
                <button onClick = { () => setActiveView("tenants")}>👤</button>
                <button onClick = { () => setActiveView("payments")}>💵</button>
                <button onClick = { () => setActiveView("staff")}>👥</button>
            </div>

            <div className = "main-content">
                {renderView()}
            </div>

        </div>
    )
}