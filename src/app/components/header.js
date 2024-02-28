import NavLinks from "./nav";
import Logo from "./logo";
import AccActions from "./login";
import styles from "../page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Maryland Nurses Honor Guard</h1>
            <Logo />
            <nav className={styles.nav}>
                <NavLinks />
            </nav>
            <div>
                <AccActions />
            </div>
        </header>
    );
}
