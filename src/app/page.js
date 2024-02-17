import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1>Home</h1>
                <p>
                    Welcome to the official website of the Maryland Nursing
                    Honor Guard. We are a group of dedicated nurses who provide
                    a final tribute to nurses who have passed away. We are a
                    non-profit organization and provide our services free of
                    charge. We are available to provide a tribute at the funeral
                    or memorial service of any nurse who has passed away. We are
                    also available to provide a tribute at the annual memorial
                    service for nurses who have passed away in the past year.
                </p>
            </main>
            <Footer />
        </div>
    );
}
