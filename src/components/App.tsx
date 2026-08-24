import { useState } from "react";
import Intro from "./Intro/Intro.tsx";
import Homepage from "./Homepage/Homepage.tsx";

import "./App.css";

function App() {
  const [inIntro, setInIntro] = useState<boolean>(true);

  return (
    <div className="app">
      {inIntro ? (
        <Intro inIntro={inIntro} setInIntro={setInIntro}></Intro>
      ) : (
        <Homepage></Homepage>
      )}
    </div>
  );
}

export default App;
