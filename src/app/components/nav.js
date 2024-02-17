import Link from "next/link";
import styles from "../globals.css";

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/donate">Donate</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/volunteer">Volunteer</Link>
                </li>
            </ul>
        </nav>
    );
}
