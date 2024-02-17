import ".././globals.css";
import NavLinks from "./nav";
import Logo from "./logo";

export default function Header() {
    return (
        <div>
            <h1>Maryland Nurses Honor Guard</h1>
            <Logo />
            <nav>
                <NavLinks />
            </nav>
        </div>
    );
}
