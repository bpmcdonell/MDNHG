"use client";

import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import VolunteerBody from "./body";
import React, { useState } from "react";
import VolunteerForm from "./form";

export default function VolunteerPage() {
    return (
        <div>
            <Head />

            <header>
                <Header />
            </header>

            <main>
                <VolunteerBody />
                <VolunteerForm />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
