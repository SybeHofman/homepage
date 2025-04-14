import "./NavBarLocation.css";

interface LocationProps{
    content: string;
    href: string;
}

const NavBarLocation: React.FC<LocationProps> = ({content, href}) => {
    return(
        <a className = "navbar-location" href={href}>
            <div>
                {content}
            </div>
        </a>
    )
}

export default NavBarLocation;