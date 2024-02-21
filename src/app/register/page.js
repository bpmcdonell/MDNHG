"use client";

import React, { useState } from "react";

export default function registerModal() {
    const [newUser, setNewUser] = useState({
        email: "",
        facebook: "",
        password: "",
        phone: "",
    });

    function handleChange(event) {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault;
        console.log(newUser);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    required
                />
                <label for="phone">Phone</label>
                <input
                    for="phone"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleChange}
                    required
                />
                <label for="facebook">Facebook</label>
                <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    value={newUser.facebook}
                    onChange={handleChange}
                    required
                />
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    required
                />
                <label for="password">Confirm Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
