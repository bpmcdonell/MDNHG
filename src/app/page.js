import styles from "./page.module.css";

import React from "react";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <p>
                Welcome to the official website of the Maryland Nurse Honor
                Guard. We are a group of dedicated volunteer nurses who provide
                memorial tributes to nurses who have passed away. We are a
                non-profit organization and provide our services free of charge.
            </p>
        </div>
    );
}
