import "./Intro.css";

interface Intro {
    text: string;
}

function Intro ({text}: Intro) {
    return(
        <div className="wrapper center">
            <div className="cursor-text">
                 {text}
                 <span className="cursor"></span>
            </div>
        </div>
    )
}

export default Intro;