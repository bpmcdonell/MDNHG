import { PT_Serif, Cormorant_Garamond, Merriweather } from "next/font/google";

import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";

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
    title: "MD Nurse Honor Guard",
    description: "Webpage for the Maryland Nurse Honor Guard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="">
            <link rel="icon" href="favicon/favicon.png" sizes="any" />
            <Head />
            <body className="">
                <Header />
                <div className="relative min-h-screen mx-auto">
                    <div className="pb-28">
                        <ReCaptchaProvider siteKey="6LdK2wkqAAAAALAsz6nqHp6ZImj_1gHD7nwGLOiv">
                            <main>{children}</main>
                        </ReCaptchaProvider>
                    </div>
                    <Footer />
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
