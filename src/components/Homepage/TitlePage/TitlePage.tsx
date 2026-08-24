import { useEffect, useRef, useState } from "react";
import MatrixColumn from "./MatrixColumn/MatrixColumn";
import TitleCard from "./TitleCard/TitleCard";
import "./TitlePage.css";

interface MatrixColumnType {
  xPos: number;
  maxY: number;
  id: string;
}

function TitlePage() {
  const [columns, setColumns] = useState<MatrixColumnType[]>([]);

  const intervalId = useRef<number>(undefined);
  const divRef = useRef<HTMLDivElement>(null);

  const intervalTime = 100;

  useEffect(() => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        const currentWidth = divRef.current?.clientWidth;
        const randomWidth = currentWidth
          ? Math.floor(Math.random() * (currentWidth - 40))
          : 0;

        const currentHeight = divRef.current?.clientHeight;

        if (currentHeight && randomWidth) {
          setColumns((prev) => [
            ...prev,
            { xPos: randomWidth, maxY: currentHeight, id: generateId() },
          ]);
        }
      }, intervalTime);
    }
  }, []);

  const generateId = () => {
    const possibleCharacters = [
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
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
    ];

    let id = "";

    for (let i = 0; i < 36; i++) {
      let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      id += possibleCharacters[randomIndex];
    }

    return id;
  };

  const removeColumn = (id: string) => {
    setColumns((prev) => {
      let tmp = prev.filter((column) => column.id !== id);
      return tmp;
    });
  };

  return (
    <div className="title-page" ref={divRef}>
      <div className="matrix-animation">
        {columns.map((column) => (
          <MatrixColumn
            key={column.id}
            xPos={column.xPos}
            maxHeight={column.maxY}
            removeMyself={removeColumn}
            id={column.id}
          ></MatrixColumn>
        ))}
      </div>

      <div className="title-card-container">
        <TitleCard></TitleCard>
      </div>
    </div>
  );
}

export default TitlePage;
