import { useEffect, useRef, useState } from "react";
import "./MatrixCharacter.css";

interface MatrixCharacter {
  character: string;
}

function MatrixCharacter({ character }: MatrixCharacter) {
  const [currentOpacity, setOpacity] = useState<number>(1);

  const intervalId = useRef<number>(undefined);

  useEffect(() => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        setOpacity((prev) => prev - 1 / 20);
      }, 100);
    } else {
      if (currentOpacity <= 0) {
        setOpacity(0);
        clearInterval(intervalId.current);
      }
    }
  }, [currentOpacity]);

  return (
    <div className="matrix-character" style={{ opacity: currentOpacity }}>
      {character}
    </div>
  );
}

export default MatrixCharacter;
