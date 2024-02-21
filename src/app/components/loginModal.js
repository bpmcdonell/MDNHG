"use client";

import { redirect } from "next/dist/server/api-utils";
import React, { useState } from "react";

export default function LoginForm() {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginUser);
        handleRedirect();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                />
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    required
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}
