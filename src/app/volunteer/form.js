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
        Facebook: "",
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
        formData.append("Facebook", volunteer.Facebook);

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
            Facebook: "",
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
                <label htmlFor="Facebook">Facebook Profile:</label>
                <input
                    name="Facebook"
                    id="Facebook"
                    value={volunteer.Facebook}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
