"use client";

import React, { useState } from "react";

export default function VolunteerForm() {
    const sheetURL =
        "https://script.google.com/macros/s/AKfycbyhlDNXQ4bgoAocuI5ZDACN0xNLDtPaH4baXUqxoAQPphao7nZwPmqhnRda9jpsjMnk/exec";
    const [volunteer, setVolunteer] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Address: "",
        City: "",
        ZipCode: "",
        County: "",
        Designation: "",
        EmploymentStatus: "",
    });

    const handleChange = async (e) => {
        setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("FirstName", volunteer.FirstName);
        formData.append("LastName", volunteer.LastName);
        formData.append("Email", volunteer.Email);
        formData.append("Phone", volunteer.Phone);
        formData.append("Address", volunteer.Address);
        formData.append("City", volunteer.City);
        formData.append("ZipCode", volunteer.ZipCode);
        formData.append("County", volunteer.County);
        formData.append("Designation", volunteer.Designation);
        formData.append("EmploymentStatus", volunteer.EmploymentStatus);

        console.log("Form Data: ", formData);
        fetch(sheetURL, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Thank you for signing up to volunteer!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error submitting your information.");
            });

        setVolunteer({
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Address: "",
            City: "",
            ZipCode: "",
            County: "",
            Designation: "",
            EmploymentStatus: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="FirstName">First Name:</label>
                <input
                    name="FirstName"
                    id="FirstName"
                    value={volunteer.FirstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                />
            </div>
            <div>
                <label htmlFor="LastName">Last Name:</label>
                <input
                    name="LastName"
                    id="LastName"
                    value={volunteer.LastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    required
                />
            </div>
            <div>
                <label htmlFor="Email">Email:</label>
                <input
                    name="Email"
                    id="Email"
                    value={volunteer.Email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                />
            </div>
            <div>
                <label htmlFor="Phone">Phone:</label>
                <input
                    name="Phone"
                    id="Phone"
                    value={volunteer.Phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                />
            </div>
            <div>
                <label htmlFor="Address">Address:</label>
                <input
                    name="Address"
                    id="Address"
                    value={volunteer.Address}
                    onChange={handleChange}
                    autoComplete="address-line1"
                    required
                />
            </div>
            <div>
                <label htmlFor="City">City:</label>
                <input
                    name="City"
                    id="City"
                    value={volunteer.City}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    required
                />
            </div>
            <div>
                <label htmlFor="ZipCode">Zip Code:</label>
                <input
                    name="ZipCode"
                    id="ZipCode"
                    value={volunteer.ZipCode}
                    onChange={handleChange}
                    autoComplete="postal-code"
                    required
                />
            </div>
            <div>
                <label htmlFor="County">County:</label>
                <select
                    name="County"
                    id="County"
                    value={volunteer.County}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    required
                >
                    <option value="">--Please choose an option--</option>
                    <option value="Allegany">Allegany County</option>
                    <option value="AnneArundel">Anne Arundel County</option>
                    <option value="BaltimoreCity">Baltimore City</option>
                    <option value="BaltimoreCounty">Baltimore County</option>
                    <option value="Calvert">Calvert County</option>
                    <option value="Caroline">Caroline County</option>
                    <option value="Carroll">Carroll County</option>
                    <option value="Cecil">Cecil County</option>
                    <option value="Charles">Charles County</option>
                    <option value="Dorchester">Dorchester County</option>
                    <option value="Frederick">Frederick County</option>
                    <option value="Garrett">Garrett County</option>
                    <option value="Harford">Harford County</option>
                    <option value="Howard">Howard County</option>
                    <option value="Kent">Kent County</option>
                    <option value="Montgomery">Montgomery County</option>
                    <option value="PrinceGeorges">
                        Prince George's County
                    </option>
                    <option value="QueenAnnes">Queen Anne's County</option>
                    <option value="Somerset">Somerset County</option>
                    <option value="StMarys">St. Mary's County</option>
                    <option value="Talbot">Talbot County</option>
                    <option value="Washington">Washington County</option>
                    <option value="Wicomico">Wicomico County</option>
                    <option value="Worcester">Worcester County</option>
                </select>
            </div>
            <div>
                <label htmlFor="Designation">Designation:</label>
                <select
                    name="Designation"
                    id="Designation"
                    value={volunteer.Designation}
                    onChange={handleChange}
                    required
                >
                    <option value="NA">--Please choose an option--</option>
                    <option value="RN">RN</option>
                    <option value="LPN">LPN</option>
                    <option value="CNA">CNA</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="EmploymentStatus">Employment Status:</label>
                <select
                    name="EmploymentStatus"
                    id="EmploymentStatus"
                    value={volunteer.EmploymentStatus}
                    onChange={handleChange}
                    required
                >
                    <option value="NA">--Please choose an option--</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Student">Student</option>
                </select>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
