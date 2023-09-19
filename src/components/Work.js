import React, { useState } from "react";
import { data } from "../datasplash/datasplash.js";

const Work = () => {
  
  //   console.log(data);
  const [works, setWorks] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setWorks(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by mode
  const filterMode = (mode) => {
    setWorks(
      data.filter((item) => {
        return item.mode === mode;
      })
    );
  };

  return (
    <div className="custom-container">
      <h1  className="custom-title">Technologies & Services</h1>

      <div className="custom-filter-row">
        <div>
          <p className="custom-filter-text">Filter Type</p>
          <div className="custom-button-group" >
            <button onClick={() => setWorks(data)} className="custom-button">
              All
            </button>
            <button
              onClick={() => filterType("electronics")}
              className="custom-button"
            >
              Electronics
            </button>
            <button
              onClick={() => filterType("dev")}
              className="custom-button"
            >
              Dev
            </button>
            <button
              onClick={() => filterType("ia")}
              className="custom-button"
            >
              IA
            </button>
            <button
              onClick={() => filterType("engineer")}
              className="custom-button"
            >
              Engineer
            </button>
          </div>
        </div>

        <div>
          <p className="custom-filter-text">Filter Mode</p>
          <div className="custom-button-group custom-max-price">
            <button onClick={() => filterMode("project")} className="custom-button">
            Project
            </button>
            <button onClick={() => filterMode("bodily")} className="custom-button">
            Bodily
            </button>
            <button
              onClick={() => filterMode("hybrid")}
              className="custom-button"
            >
              Hybrid
            </button>
            <button
              onClick={() => filterMode("remote")}
              className="custom-button"
            >
              Remote
            </button>
          </div>
        </div>
      </div>

      <div className="custom-grid">
        {works.map((item, index) => (
          <div key={index} className="custom-card">
            <img src={item.image} alt={item.name} className="custom-img" />
            <p>
              <span className="custom-badge">{item.mode}</span>
            </p>
            <div className="custom-flex custom-info">
              <p className="custom-info-text">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
