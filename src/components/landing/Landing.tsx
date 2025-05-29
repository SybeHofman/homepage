import "./Landing.css";
import { useState, useEffect, useRef } from "react";
import Intro from "./Intro";
import NavBar from "../navBar/NavBar";

function Landing() {
    //TODO: remove animation for redirects
    const [inIntro, setInIntro] = useState<Boolean>(true);
    const [index, setIndex] = useState(0);

    const text = "C:\\CoolGuys> cd Syeb-w-d-dbe Hofman"
    const speed = 200;

    const getIntroText = (i: number) => {
        let s = "";
        for(let j = 0; j <= i; j++){
            if(text.charAt(j) === '-'){
                if(text.charAt(j + 1) === 'w'){
                    j++;
                }
                else if(text.charAt(j + 1) === 'd'){
                    s = s.slice(0, -1);
                    j++;
                }
            } else{
                s += text.charAt(j);
            }
        }
        return s;
    }

    useEffect(() => {
        if (!inIntro) return;

        if (index < text.length) {
            const intervalId = setInterval(() => {
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearInterval(intervalId);
        } else {
            // Animation finished, show NavBar after a short delay (optional)
            const timeoutId = setTimeout(() => setInIntro(false), 500);
            return () => clearTimeout(timeoutId);
        }
    }, [index, inIntro, text.length, speed]);



    return(
        <div className="landing">
            {inIntro ? <Intro text = {getIntroText(index)} /> : null}
            {!inIntro ? <div className = "homepage">
                <NavBar></NavBar>
            </div>
            : null
            }
        </div>
    )
}

export default Landing;