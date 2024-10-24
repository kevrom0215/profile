import React from "react";
import kenneth from "../../assets/me.jpg";
import "./AboutMe.css";
import "../../styles/global.css";

const AboutMe = () => {
  const createConfetti = (numberOfPieces) => {
    return [...Array(numberOfPieces)].map((_, index) => {
      const swayValue = (Math.random() - 0.5) * 2; // Random sway value between -1 and 1
      return (
        <div
          key={index}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
            animationDuration: `${Math.random() * 2 + 3}s`, // Random duration between 3s and 5s
            "--sway": swayValue,
          }}
        />
      );
    });
  };

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
              <li>🚗 Car Enthusiast</li>
              <li>🤖 Gundam Enthusiast</li>
              <li>🐕 Dog Lover</li>
            </ul>
          </div>
        </div>
        <div className="grid-item">
          <img
            src={kenneth}
            alt="picture of me"
            style={{
              width: "80%",
              minHeight: "400px",
              maxHeight: "500px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="grid-item">
          <iframe
            width="400"
            height="500"
            src="https://www.youtube.com/embed/Eu_KKnNoNY8"
            title="Clark International Speedway First Lap"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid-item">
          <p>Most of the time</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
