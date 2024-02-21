import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MD Nurse Honor Guard",
    description: "Webpage for the Maryland Nurses Honor Guard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Head />
                <Header />

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    );
}
