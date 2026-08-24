import { useEffect, useRef, useState } from "react";
import MatrixCharacter from "./MatrixCharacter/MatrixCharacter";
import "./MatrixColumn.css";

interface MatrixColumn {
  xPos: number;
  maxHeight: number;
  removeMyself: (id: string) => void;
  id: string;
}

function MatrixColumn({ xPos, maxHeight, removeMyself, id }: MatrixColumn) {
  const possibleCharacters = [
    "ﾊ",
    "ﾐ",
    "ﾋ",
    "ｰ",
    "ｳ",
    "ｼ",
    "ﾅ",
    "ﾓ",
    "ﾆ",
    "ｻ",
    "ﾜ",
    "ﾂ",
    "ｵ",
    "ﾘ",
    "ｱ",
    "ﾎ",
    "ﾃ",
    "ﾏ",
    "ｹ",
    "ﾒ",
    "ｴ",
    "ｶ",
    "ｷ",
    "ﾑ",
    "ﾕ",
    "ﾗ",
    "ｾ",
    "ﾈ",
    "ｽ",
    "ﾀ",
    "ﾇ",
    "ﾍ",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "E",
    "S",
    "M",
  ];

  const [characters, setCharacters] = useState<string[]>([]);
  const intervalId = useRef<number>(undefined);

  const columnRef = useRef<HTMLDivElement>(null);

  const intervalTime = 100;

  useEffect(() => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        const randomIndex = Math.floor(
          Math.random() * possibleCharacters.length,
        );

        setCharacters((prev) => [...prev, possibleCharacters[randomIndex]]);
      }, intervalTime);
    }
  }, []);

  useEffect(() => {
    if (
      (columnRef.current?.clientHeight ?? 0) >= maxHeight &&
      characters.length > 0 &&
      intervalId.current
    ) {
      clearInterval(intervalId.current);
      setTimeout(() => removeMyself(id), 10000);
    }
  }, [characters]);

  return (
    <div className="matrix-column" style={{ left: xPos }} ref={columnRef}>
      {characters.map((character, index) => (
        <MatrixCharacter key={index} character={character}></MatrixCharacter>
      ))}
    </div>
  );
}

export default MatrixColumn;
