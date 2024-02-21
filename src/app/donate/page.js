import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import DonateBody from "./body.js";

export default function DonatePage() {
    return (
        <div>
            <main>
                <DonateBody />
            </main>
        </div>
    );
}
