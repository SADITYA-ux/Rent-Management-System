import React, { useState } from 'react';
import "../style/RegistrationForm.css";

export default function RegistrationForm() {
    const [formData, setformData] = useState({
        // Apartment
        number: "",
        floor: "",
        size: "",
        rent: "",
        status: "occupied",

        // Tenant
        name: "",
        phone: "",
        leaseStart: "",
        leaseEnd: "",

        // Payment
        amount: "",
        month: "",
        paidOn: "",
        paymentStatus: "paid"
    });

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("http://localhost:5000/apartments", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log("Apartment Registred: ", data));

        await fetch("http://localhost:5000/tenants", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log("Tenant Registred: ", data));

        await fetch("http://localhost:5000/payments", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log("Payment Registred: ", data));
    }

    return (
        <div className="registration-form">
            <form className="form" onSubmit={handleSubmit}>

                <h2>Apartment Details</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Number:</label>
                        <input
                            type="text"
                            value={formData.number}
                            onChange={(e) => setformData({ ...formData, number: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Floor:</label>
                        <input
                            type="text"
                            value={formData.floor}
                            onChange={(e) => setformData({ ...formData, floor: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Size:</label>
                        <input
                            type="text"
                            value={formData.size}
                            onChange={(e) => setformData({ ...formData, size: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Rent:</label>
                        <input
                            type="text"
                            value={formData.rent}
                            onChange={(e) => setformData({ ...formData, rent: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Status:</label>
                        <select
                            value={formData.status}
                            onChange={(e) => setformData({ ...formData, status: e.target.value })}
                        >
                            <option value="occupied">Occupied</option>
                            <option value="vacant">Vacant</option>
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
                            onChange={(e) => setformData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setformData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Lease Start:</label>
                        <input
                            type="date"
                            value={formData.leaseStart}
                            onChange={(e) => setformData({ ...formData, leaseStart: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Lease End:</label>
                        <input
                            type="date"
                            value={formData.leaseEnd}
                            onChange={(e) => setformData({ ...formData, leaseEnd: e.target.value })}
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
                            onChange={(e) => setformData({ ...formData, amount: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Month:</label>
                        <input
                            type="text"
                            value={formData.month}
                            onChange={(e) => setformData({ ...formData, month: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Paid On:</label>
                        <input
                            type="date"
                            value={formData.paidOn}
                            onChange={(e) => setformData({ ...formData, paidOn: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Payment Status:</label>
                        <select
                            value={formData.paymentStatus}
                            onChange={(e) => setformData({ ...formData, paymentStatus: e.target.value })}
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