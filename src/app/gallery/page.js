import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import GalleryBody from "./body.js";

export default function GalleryPage() {
    return (
        <div>
            <main>
                <GalleryBody />
            </main>
        </div>
    );
}
