import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import VolunteerBody from "./body";
import React from "react";

export default function VolunteerPage() {
    return (
        <div>
            <Head />

            <header>
                <Header />
            </header>

            <main>
                <VolunteerBody />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
