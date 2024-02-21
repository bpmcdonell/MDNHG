import NavLinks from "./nav";
import Logo from "./logo";
import AccActions from "./login";

export default function Header() {
    return (
        <div>
            <h1>Maryland Nurses Honor Guard</h1>
            <Logo />
            <nav>
                <NavLinks />
            </nav>
            <div>
                <AccActions />
            </div>
        </div>
    );
}
