import React , { useState } from "react";
import "../style/StaffForm.css";

export default function staffForm()
{
    const [formData , setFormData] = useState(
        {
            name : "" ,
            phone : "" ,
            salary : "" ,
            position : "" ,
            age : ""
        }
    )

    async function handleSubmit(e)
    {
        e.preventDefault();

        const data =
        {
            name : formData.name ,
            phone : formData.phone ,
            salary : formData.salary ,
            position : formData.position ,
            age : formData.age
        }

        await fetch("http://localhost:5000/staff",
            {
                method : "POST",
                headers : 
                    {
                        "COntent-Type" : "application/json"
                    },
                body : JSON.stringify(formData)
            }
        )

        alert("Staff member added successfully!");
    }

    return ( 
        <div className = "staff-form-container">
            <form onSubmit = {handleSubmit} className = "staff-form">
                <h2>Add New Staff Member</h2>

                    <div className = "form-grid">

                        <div className = "form-group">
                            <label>Name:</label>
                            <input 
                                type = "text"
                                value = {formData.name}
                                onChange = {(e) => setFormData({...formData , name : e.target.value})}
                            />
                        </div>

                        <div className = "form-group">
                            <label>Phone:</label>
                            <input 
                                type = "text"
                                value = {formData.phone}
                                onChange = {(e) => setFormData({...formData , phone : e.target.value})}
                            />
                        </div>

                        <div className = "form-group">
                            <label>Salary:</label>
                            <input 
                                type = "text"
                                value = {formData.salary}
                                onChange = {(e) => setFormData({...formData , salary : e.target.value})}
                            />
                        </div>

                        <div className = "form-group">
                            <label>Position:</label>
                            <input 
                                type = "text"
                                value = {formData.position}
                                onChange = {(e) => setFormData({...formData , position : e.target.value})}
                            />
                        </div>

                        <div className = "form-group">
                            <label>Age:</label>
                            <input 
                                type = "text"
                                value = {formData.age}
                                onChange = {(e) => setFormData({...formData , age : e.target.value})}
                            />
                        </div>

                    </div>

                    <button type = "submit" className = "submit-btn">Add Staff Member</button>
                
            </form>
        </div>
    )
}