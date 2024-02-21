import Link from "next/link";
import React from "react";

export default function AccActions() {
    return (
        <div>
            <Link href="/login">
                <button>Login</button>
            </Link>
            <Link href="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}
