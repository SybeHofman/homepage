import Intro from "./landing/Intro.tsx";
import "./App.css"
import NavBar from "./navBar/NavBar.tsx";
import { useState } from "react";

function App() {
  const [inIntro, setInIntro] = useState<boolean>(true);
  return(
    <div className = "app">
      {inIntro ? <Intro inIntro = {inIntro} setInIntro = {setInIntro}/> :
      <div className = "homepage">
          <NavBar></NavBar>
          
          <div className="content" id="about">
            <h1>Sybe Hofman</h1>
            <ul>
              <li>I am a high school student at North Creek High School</li>
              <li>I am a discus thrower</li>
              <li>I am a programmer</li>
            </ul>
            <div>That's about it!</div>
          </div>
          <div className="content" id="projects">
            <h1>PROJECTS</h1>
            <div>Will update in the future</div>
          </div>
          <div className="content" id="contacts">
            <h1>CONTACTS</h1>
            <div> 
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sybe.t.hofman@gmail.com" target="_blank" rel="noopener noreferrer">
                Email: sybe.t.hofman@gmail.com
              </a>
            </div>
            <div>
              <a href="https://discordapp.com/users/1183215061943205988">
                Discord: enemy_starling47
              </a>
            </div>
          </div>
      </div>
      }
    </div>
  );
}

export default App;