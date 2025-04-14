import NavBarLocation from "./NavBarLocation"
import logo from "../../assets/logo.svg"
import "./NavBar.css";

function NavBar() {
    return(
        <nav className="navbar">
            <a href="/homepage/">
                <img alt="Logo" className="logo" src={logo}></img>
            </a>
            <NavBarLocation content="About" href="/about/"/>
            <NavBarLocation content="Contacts" href="/contacts/"/>
        </nav>
    );
}

export default NavBar;