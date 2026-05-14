import React , {useState} from "react";
import RegistrationForm from "../components/RegistrationForm";
import StaffForm from "../components/StaffFrom";
import "../style/FormPage.css";

export default function FormPage()
{
    const [ activeForm , setActiveForm ] = useState("registration");

    return(
            <div className = "form-page">
                <div className="form-sidebar">
                <button onClick={() => setActiveForm("registration")}>🏠 Tenant Registration</button>
                <button onClick={() => setActiveForm("staff")}>👷 Staff Registration</button>
            </div>

            <div className="main-content">
                {activeForm === "registration" && <RegistrationForm />}
                {activeForm === "staff" && <StaffForm />}
            </div>
            </div>
    )
}