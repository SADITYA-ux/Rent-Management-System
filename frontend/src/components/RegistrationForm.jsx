import React, { useState, useEffect } from 'react';
import "../style/RegistrationForm.css";

export default function RegistrationForm() {

    const [formData, setformData] = useState({
        number: "",
        name: "",
        phone: "",
        leaseStart: "",
        leaseEnd: "",
        amount: "",
        month: "",
        paidOn: "",
        paymentStatus: "paid"
    });

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/apartments")
            .then(res => res.json())
            .then(data => setApartments(data.filter(a => a.status === "vacant")))
            .catch(err => console.log(err));
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const selectedApartment = apartments.find(a => a.number === formData.number);

        const tenantData = {
            apartmentId: formData.number,
            name: formData.name,
            rent: selectedApartment.rent,
            phone: formData.phone,
            leaseStart: formData.leaseStart,
            leaseEnd: formData.leaseEnd
        };

        const tenantRes = await fetch("http://localhost:5000/tenants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tenantData)
        });
        const newTenant = await tenantRes.json();

        const paymentData = {
            tenantId: newTenant.id,
            name: formData.name,
            amount: formData.amount,
            month: formData.month,
            paidOn: formData.paidOn,
            paymentStatus: formData.paymentStatus
        };

        await fetch("http://localhost:5000/payments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData)
        });

        alert("Registration Successful");

        setformData({
            number: "",
            name: "",
            phone: "",
            leaseStart: "",
            leaseEnd: "",
            amount: "",
            month: "",
            paidOn: "",
            paymentStatus: "paid"
        });
    }

    return (
        <div className="registration-form">
            <form className="form" onSubmit={handleSubmit}>

                <h2>Apartment Details</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Select Apartment:</label>
                        <select
                            value={formData.number}
                            onChange={(e) => setformData({...formData, number: e.target.value})}
                        >
                            <option value="">Select Apartment</option>
                            {apartments.map(a => (
                                <option key={a.id} value={a.number}>
                                    Apt {a.number} - Floor {a.floor} - {a.size} - Rs.{a.rent}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <h2>Tenant Details</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setformData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setformData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lease Start:</label>
                        <input
                            type="date"
                            value={formData.leaseStart}
                            onChange={(e) => setformData({...formData, leaseStart: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lease End:</label>
                        <input
                            type="date"
                            value={formData.leaseEnd}
                            onChange={(e) => setformData({...formData, leaseEnd: e.target.value})}
                        />
                    </div>
                </div>

                <h2>Payment Details</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Amount:</label>
                        <input
                            type="text"
                            value={formData.amount}
                            onChange={(e) => setformData({...formData, amount: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Month:</label>
                        <input
                            type="month"
                            value={formData.month}
                            onChange={(e) => setformData({...formData, month: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Paid On:</label>
                        <input
                            type="date"
                            value={formData.paidOn}
                            onChange={(e) => setformData({...formData, paidOn: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Payment Status:</label>
                        <select
                            value={formData.paymentStatus}
                            onChange={(e) => setformData({...formData, paymentStatus: e.target.value})}
                        >
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}