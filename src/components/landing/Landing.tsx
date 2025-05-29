import "./Landing.css";
import { useState, useEffect, useRef } from "react";
import Intro from "./Intro";
import NavBar from "../navBar/Navbar";
function Landing() {
    //TODO: remove animation for redirects
    const [inIntro, setInIntro] = useState<Boolean>(true);
    const [displayed, setDisplayed] = useState('');

    const text = "C:\\CoolGuys> cd Syeb-w-w-w-w-w-w-d-dbe Hofman"
    const speed = 200;

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        // Clear any previous interval before setting a new one
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        let index = 0;

        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


        intervalRef.current = setInterval(async () => {
            if (index >= text.length) {
                clearInterval(intervalRef.current!);
                intervalRef.current = null;
                await sleep(1000);
                setInIntro(false);
                return;
            }

            const currentChar = text[index];

            //ESCAPE SEQUENCES
            if(currentChar === '-'){
                if(text[index + 1] === 'd'){
                    setDisplayed((prev) => prev.slice(0, -1));
                    index++;
                }

                else if(text[index + 1] === 'w'){
                    index++;
                }
            }
            else setDisplayed((prev) => prev + currentChar);
            index++;
        }, speed);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [text, speed]);



    return(
        <div className="landing">
            { inIntro ? <Intro text = {displayed} /> : null}
            {!inIntro ?
            <NavBar></NavBar>
            
            : null
            }
        </div>
    )
}

export default Landing;