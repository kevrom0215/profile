import React from "react";
import kenneth from "../../assets/me.jpg";
import "./AboutMe.css";
import icons from "../../assets/icons.json";
import pikachu from "../../assets/pikachu.gif";

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
            animationDuration: `${Math.random() * 2 + 3}s`, // Random duration between 3s and 5s
            "--sway": swayValue,
          }}
        >
          <img
            src={pikachu}
            alt="Pikachu"
            style={{ objectFit: "contain", height: "20px", width: "20px" }}
          />
        </div>
      );
    });
  };
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
              Java, Angular, and AWS technologies.
            </p>
            <p className="description">
              Currently I am focused on building my profile to be better each
              day.
            </p>
            <p className="description">
              When I’m not diving deep into code, you’ll find me immersed in a
              variety of hobbies that fuel my passion and joy.
            </p>
            <div className="confetti-container">
              {createConfetti(12)} {/* Create 30 pieces of confetti */}
            </div>
            <div className="social-media-grid">
              <div className="svg-container">
                <a
                  href="https://www.linkedin.com/in/kenneth-araga-81a4261b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </div>
              <div className="svg-container">
                <a
                  href="https://www.instagram.com/kennetharaga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                  </svg>
                </a>
              </div>
              <div className="svg-container">
                <a
                  href="https://github.com/kevrom0215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                  </svg>
                </a>
              </div>
              <div className="svg-container">
                <a
                  href="https://discord.com/users/kevrom0215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item" style={{ textAlign: "center" }}>
            <img
              src={kenneth}
              alt="self"
              style={{
                width: "80%",
                height: "500px",
                borderRadius: "10px",
                objectFit: "contain",
                padding: "1rem",
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
              <li className="pikachu">Angular</li>
              <li className="pikachu">React</li>
              <li className="pikachu">Java</li>
              <li className="pikachu">MySQL</li>
              <li className="pikachu">NodeJs</li>
              <li className="pikachu">AWS Services</li>
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
        <div className="grid-container">
          <div>
            <h2 className="description">Where I've worked</h2>
          </div>
          <div></div>
          <div className="grid-item employer">
            <div className="logo">
              <img
                src="https://pointwest.com/wp-content/uploads/2024/06/Pointwest-logo-footer.svg-2.png"
                alt="Pointwest Logo"
                style={{ height: 70, backgroundColor: "#034F72",margin: 10,padding:10
                 }}
              />
            </div>
          </div>
          <div className="grid-item">
            <ul>
              <li className="pikachu">
                Refactored legacy codebases for improved maintainability,
                facilitating easier future updates.
              </li>
              <li className="pikachu">
                Conducted comprehensive code reviews to enhance code quality
                across team projects.
              </li>
              <li className="pikachu">
                Provided mentorship and technical guidance to junior developers,
                fostering a collaborative team environment.
              </li>
              <li className="pikachu">
                Deployed a WordPress Lightsail instance with a CDN, load
                balancer, an installed RDS database, and a custom domain using
                GoDaddy, ensuring scalability and optimized performance.
              </li>
              <li className="pikachu">
                Enabled SNS notifications on the Lightsail webpage to manage and
                respond to company inquiries efficiently.
              </li>
              <li className="pikachu">
                Developed and maintained unit tests using Jasmine, ensuring code
                stability and early detection of issues.
              </li>
              <li className="pikachu">
                Estimated cloud costs for the Lightsail website, optimizing
                resource usage and balancing performance with budget
                considerations.
              </li>
              <li className="pikachu">
                Currently developing an application by merging two existing apps
                into a unified solution, streamlining functionality and
                improving user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <h2 className="description">Education</h2>
          </div>
          <div></div>
          <div className="grid-item logo">
            <img
              src={
                "https://www.dlsu.edu.ph/wp-content/uploads/2024/10/dlsu-gcoe-logo-300x169.png"
              }
              style={{ height: 150 }}
            />
          </div>
          <div className="grid-item">
            <p>De La Salle University Manila</p>
            <p>BS Mechanical Engineering Minor in Mechatronics Engineering</p>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <h2 className="description">Certification</h2>
          </div>
          <div></div>
          <div className="grid-item logo">
            <img
              src={
                "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
              }
              style={{ height: 150 }}
            />
          </div>
          <div className="grid-item">
            <p>AWS Certified Cloud Practitioner</p>
            <p>Issued on Feb 2025 - Expires 2028</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
