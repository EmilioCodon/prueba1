import React from "react";
import Typical from "react-typical";
import foto from "./foto.jpg";

const steps = [
  " Emilio Codon 👋",
  1600,
  " developer 💻",
  1700,
  " engineer 🔧",
  1400,
  " creative 🤓",
  1400,
  " innovative  💭",
  1400,
  " skilled 🎓",
  1200,
  " problem-solver 💡",
  1100,
  " analytical 🧠",
  1000,
  " collaborative 🤝",
  1000,
  " self-motivated 📈",
  1000,
  " continuous learner 📖",
  1000,
];

const Home = () => {
  return (
    <div className="azul">
      <div className="homestyle">
        <div className="hometext">
          <h1 contenteditable="true">Welcome to my profile!</h1>
          <br />
          <span className="caca">
            <span className="caca3">Hello I´m</span>
            <Typical
              wrapper="span"
              steps={steps}
              loop={Infinity}
              className={"caca2"}
            />
          </span>

          <br />

          
          <div class="flicker">
            <span >
              A passionate engineer and web developer. I create stunning
              websites, custom web apps, and offer expert tech guidance. Let's
              elevate your online presence together! Explore my portfolio and
              get in touch.
            </span>
          </div>
        </div>

        <div className="imagenfoto">
          <img src={foto} className="fotoemo" alt="foto" />
          <div>
          <a href="https://drive.google.com/file/d/1CUDYT7lwUFshbC_CMCAs8xaaz3SYYKL0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="button">Download CV</button>
          </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
