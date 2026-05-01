import React , {useState , useEffect} from 'react';
import "../style/TenantList.css";

export default function TenantList()
{
    const [ tenant , setTenant] = useState([]);

    useEffect( () => 
    {
         fetch("http://localhost:5000/tenants")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setTenant(data) )  // save to state")
    },[]);

    return(
        <div className = "tenant-list">
            <table className = "tenant-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Apartment</th>
                        <th>Rent</th>
                        <th>LeaseStart</th>
                        <th>LeaseEnd</th>
                    </tr>
                </thead>

                <tbody>
                    {tenant.map( t =>
                    {
                        const today = new Date();
                        const leaseEnd = new Date(t.leaseEnd);
                        const daysLeft = (leaseEnd - today) / (1000 * 60 * 60 * 24);

                        return(
                            <tr key = {t.id}>
                                <td>{t.name}</td>
                                <td>{t.apartmentId}</td>
                                <td>{t.rent}</td>
                                <td>{t.leaseStart}</td>
                                <td>
                                    <span className = {`lease-status ${ daysLeft <= 30 ? "expiring" : "active"}`}>
                                        {t.leaseEnd}
                                    </span>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}