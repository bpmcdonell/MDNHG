import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import ServiceBody from "./body.js";

export default function ServicePage() {
    return (
        <div>
            <main>
                <ServiceBody />
            </main>
        </div>
    );
}
