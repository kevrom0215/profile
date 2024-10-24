import React from "react";
import kenneth from "../../assets/me.jpg";
import "./AboutMe.css";
import icons from "../../assets/icons.json";

const AboutMe = () => {
  const githubIcon = icons.github_icon;
  const skills = [
    {
      name: "Angular",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2560px-Angular_full_color_logo.svg.png",
    },
    {
      name: "AWS",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Java",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "NodeJs",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    },
    {
      name: "Python",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2560px-Python-logo-notext.svg.png",
    },
    {
      name: "React",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png",
    },
  ];
  return (
    <div>
      <div className="wrapper">
        <div className="grid-container">
          <div className="grid-item">
            <div className="about">
              <h2>Hi, I am Kenneth </h2>
            </div>
            <p className="description">A Software Engineer.</p>
            <p className="description">
              Full Stack Developer/Cloud Data Engineer at Pointwest, focusing on
              Java and Angular technologies.
            </p>
            <p className="description">
              Currently I am focused on building my profile to be better each
              day.
            </p>
            <p className="description">
              When I’m not diving deep into code, you’ll find me immersed in a
              variety of hobbies that fuel my passion and joy.
            </p>
            <div className="social-media-grid">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                <svg width="40" height="40" viewBox="0 0 20 20" fill="black">
                  <path d={githubIcon} />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                <svg width="40" height="40" viewBox="0 0 20 20" fill="black">
                  <path d={githubIcon} />
                </svg>
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                <svg width="40" height="40" viewBox="0 0 20 20" fill="black">
                  <path d={githubIcon} />
                </svg>
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                <svg width="40" height="40" viewBox="0 0 20 20" fill="black">
                  <path d={githubIcon} />
                </svg>
              </a>
              
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
            <p className="description">
              My love for software engineering started way back in highschool
              where we learned how to do game development using visual basic.
            </p>
            <p className="description">
              Fast forward to today, I was given an opportunity to continue my
              love for coding by Pointwest, a filipino owned company to
              kickstart my career on Software Engineering
            </p>
            <p className="description">
              Here are the technologies that I have been working on recently :
            </p>
            <ul className="description">
              <li>Angular</li>
              <li>React</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>NodeJs</li>
              <li>AWS Services</li>
            </ul>
          </div>
          <div className="grid-item">
            <br></br>
            <div className="grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-container">
                  {/* <div>{skill.name}</div> */}
                  <div>
                    <img
                      src={skill.imageUrl}
                      alt={`${skill.name} logo`}
                      className="skill-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <p>© 2024 Kenneth. All rights reserved.</p>
          <div className="socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
