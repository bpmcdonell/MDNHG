import { PT_Serif } from "next/font/google";

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

export const metadata = {
    title: "MD Nurse Honor Guard",
    description: "Webpage for the Maryland Nurses Honor Guard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="favicon/favicon.png" sizes="any" />
            <Head />
            <body>
                <Header />
                <div className="relative min-h-screen container mx-auto">
                    <div className="pb-44">
                        <main>{children}</main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
