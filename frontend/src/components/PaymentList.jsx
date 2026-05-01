import React , {useState , useEffect} from 'react';
import "../style/PaymentList.css";

export default function PaymentList()
{
    const [ payments , setpayments] = useState([]);

    useEffect( () => 
    {
         fetch("http://localhost:5000/payments")
        .then( res => res.json() )        // convert response to JSON
        .then( data => setpayments(data) )  // save to state")
    },[]);

    return(
        <div className = "payments-list">
            <table className = "payments-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rent</th>
                        <th>PayedDate</th>
                        <th>Month</th>
                        <th>status</th>
                    </tr>
                </thead>

                <tbody>
                    {payments.map( t =>
                        (
                            <tr key = {t.id}>
                                <td>{t.name}</td>
                                <td>{t.amount}</td>
                                <td>{t.paidOn}</td>
                                <td>{t.month}</td>
                                <td>
                                    <span className = {`status-badge ${t.status.toLowerCase()}`}>
                                        {t.status}
                                    </span>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            <div className = "revenue-card">
                <h2>TOTAL REVENUE</h2>
                <p>Rs.{payments
                    .reduce( (t , p) => t + p.amount, 0)
                    .toFixed(2)}
                </p>
            </div>
        </div>
    )
}