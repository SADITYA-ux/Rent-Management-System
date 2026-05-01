import React from 'react';
import { useState , useEffect } from 'react';
import "../style/APartmentList.css";

export default function ApartmentList()
{
    const [ apartments , setApartments ] = useState([]);

    useEffect ( () =>
    {
        fetch("http://localhost:5000/apartments")
        .then( res => res.json() )  // convert response to JSON
        .then( data => setApartments(data) )// save to state")
    },[]);

    return(
        <div className = "apartment-list">
            <table className = "apartment-table">

                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Floor</th>
                        <th>Size</th>
                        <th>Rent</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {apartments.map( a => 
                        (
                            <tr key = {a.id}>
                                <td>{a.number}</td>
                                <td>{a.floor}</td>
                                <td>{a.size}</td>
                                <td>{a.rent}</td>
                                <td>
                                    <span className = {`status-badge ${a.status.toLowerCase()}`}>
                                        {a.status}
                                    </span>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}