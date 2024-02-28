import Link from "next/link";
import React from "react";

export default function NavLinks() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/gallery">Gallery</Link>
            </li>
            <li>
                <Link href="/inMemoriam">In Memoriam</Link>
            </li>
            <li>
                <Link href="/donate">Donate</Link>
            </li>
            <li>
                <Link href="/services">Services</Link>
            </li>
            <li>
                <Link href="/testimonials">Testimonials</Link>
            </li>

            <li>
                <Link href="/volunteer">Volunteer</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
