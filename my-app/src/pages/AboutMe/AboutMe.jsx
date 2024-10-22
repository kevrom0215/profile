import React from "react";
import kenneth from "../../assets/me.jpg";
import "./AboutMe.css";

const AboutMe = () => {

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid-item">
          <div className="about">
            <h2>Hi, I am Kenneth {"\u263A"}</h2>
          </div>
          <p className="description">
            A Software Engineer. Full Stack Developer at Pointwest, focusing on
            Java and Angular technologies.
          </p>
          <p className="description">
            When I’m not diving deep into code, you’ll find me immersed in a
            variety of hobbies that fuel my creativity and joy.
          </p>
          <div className="description">
          <h3>More About Me</h3>
          <ul style={{ textAlign: "left", listStyle: "none" }}>
            <li>🚗{"\u00A0"}{"\u00A0"}{"\u00A0"}Car Enthusiast</li>
            <li>🤖{"\u00A0"}{"\u00A0"}{"\u00A0"}Gundam Enthusiast</li>
            <li>🐕{"\u00A0"}{"\u00A0"}{"\u00A0"}Dog Lover</li>
          </ul>
          </div>
          
        </div>
        <div className="grid-item">
          <img
            src={kenneth}
            alt="picture of me"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="grid-item">
          <img
            src={kenneth}
            alt="picture of me"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="grid-item">
          <img
            src={kenneth}
            alt="picture of me"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
