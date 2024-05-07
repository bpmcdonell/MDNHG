import { PT_Serif, Cormorant_Garamond, Merriweather } from "next/font/google";

import React from "react";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./globals.css";

const ptSerif = PT_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic"],
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic"],
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic"],
});

export const metadata = {
    title: "MD Nurses Honor Guard",
    description: "Webpage for the Maryland Nurses Honor Guard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="">
            <link rel="icon" href="favicon/favicon.png" sizes="any" />
            <Head />
            <body className="">
                <Header />
                <div className="relative min-h-screen mx-auto">
                    <div className=" pb-32">
                        <main>{children}</main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
