import "./NavBar.css";

function NavBar() {
    return(
        <nav>
            <a href = "https://sybehofman.github.io/homepage/">
                <div className="nav-contents homepage-icon">SH</div>
            </a>
            <a href = "https://sybehofman.github.io/about/">
                <div className="nav-contents about">ABOUT</div>
            </a>
            <a href = "https://sybehofman.github.io/contacts/">
                <div className="nav-contents contacts">CONTACTS</div>
            </a>
        </nav>
    )
}

export default NavBar;