"use client";

import React, { useState } from "react";
import { FormEvent } from "react";

export default function VolunteerForm() {
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
        console.log(volunteer);
    };

    return (
        <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyhlDNXQ4bgoAocuI5ZDACN0xNLDtPaH4baXUqxoAQPphao7nZwPmqhnRda9jpsjMnk/exec"
        >
            <label htmlFor="FirstName">First Name:</label>
            <input
                name="FirstName"
                value={volunteer.FirstName}
                onChange={handleChange}
                required
            />
            <label htmlFor="LastName">Last Name:</label>
            <input
                name="LastName"
                value={volunteer.LastName}
                onChange={handleChange}
                required
            />
            <label htmlFor="Email">Email:</label>
            <input
                name="Email"
                value={volunteer.Email}
                onChange={handleChange}
                required
            />
            <label htmlFor="Phone">Phone:</label>
            <input
                name="Phone"
                value={volunteer.Phone}
                onChange={handleChange}
                required
            />
            <label htmlFor="Facebook">Facebook Profile:</label>
            <input
                name="Facebook"
                value={volunteer.Facebook}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
