import { useState, useEffect, useRef } from "react";
import "./Intro.css";

interface Intro {
  inIntro: boolean;
  setInIntro: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro = ({ inIntro, setInIntro }: Intro) => {
  const [displayString, setDisplayString] = useState<string>(
    "C:\\EpicProgrammers> ",
  );

  // - is used as an escape character.
  // b signifies a backspace
  // w signifies a wait of one interval
  const textToAdd = useRef<string>("cd .\\Enemyst-w-b-bStarling");

  const changeText = () => {
    if (textToAdd.current.length > 0) {
      let charToAdd = textToAdd.current.charAt(0);
      textToAdd.current = textToAdd.current.slice(1);

      if (charToAdd === "-") {
        if (textToAdd.current.charAt(0) === "b") {
          setDisplayString((prev) => prev.slice(0, -1));
        } else if (textToAdd.current.charAt(0) === "w") {
          //Do nothing for a wait
        } else {
          console.error("Invalid escape sequence in intro text");

          clearInterval(intervalId.current);
          setInIntro(false);
        }

        textToAdd.current = textToAdd.current.slice(1);
      } else {
        setDisplayString((prev) => prev + charToAdd);
      }
    }
  };

  const intervalId = useRef<number>(0);

  useEffect(() => {
    if (intervalId.current === 0) {
      intervalId.current = setInterval(() => {
        changeText();

        if (textToAdd.current.length <= 0) {
          const timeoutId = setTimeout(() => setInIntro(false), 1000);
          clearInterval(intervalId.current);
        }
      }, 175);
    }
  }, []);

  return <div className="intro">{displayString}</div>;
};

export default Intro;
