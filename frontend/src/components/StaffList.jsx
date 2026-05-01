import React , {useState , useEffect} from 'react';
import "../style/StaffList.css";

export default function PaymentList()
{
    const [ staff , setstaff] = useState([]);

    useEffect( () => 
    {
         fetch("http://localhost:5000/staff")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setstaff(data) )  // save to state")
    },[]);

    return(
        <div className = "staff-list">
            <table className = "staff-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Salary</th>
                        <th>Position</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {staff.map( t =>
                        (
                            <tr key = {t.id}>
                                <td>{t.name}</td>
                                <td>{t.phone}</td>
                                <td>{t.salary}</td>
                                <td>{t.position}</td>
                                <td>{t.age}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}