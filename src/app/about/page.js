import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutBody from "./body";

export default function AboutPage() {
    return (
        <div>
            <Head />

            <header>
                <Header />
            </header>

            <main>
                <AboutBody />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
