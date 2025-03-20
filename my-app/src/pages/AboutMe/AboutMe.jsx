import React, { useState, useEffect } from "react";
import kenneth from "../../assets/me.jpg";
import car from "../../assets/car.jpeg";
import hills from "../../assets/hills.jpeg";
import "./AboutMe.css";
import ContactForm from "../ContactForm/ContactForm";
import skills from "../../assets/skills.json";
import point from "../../assets/point.png";
import SkillCarousel from "../../components/Carousel/SkillCarousel";

const AboutMe = () => {
  const [index, setIndex] = useState(0);
  const images = [kenneth, car, hills];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="grid-container about-me">
          <div className="grid-item">
            <div className="about">
              <h2>Hi, I am Kenneth </h2>
            </div>
            <p className="description">A Software Engineer.</p>
            <p className="description">
              I specialize in full-stack development and cloud data engineering,
              working with Java, Angular, and AWS. 
            </p>
          </div>
          <div className="grid-item" style={{ textAlign: "center" }}>
            <div className="instax">
              <img src={images[index]} alt="Slideshow" className="slide" />
            </div>
          </div>
        </div>

        <div className="grid-container skills">
          <div className="section">
            <h2 className="label">Experience</h2>
          </div>
          <div className="grid-item">
            <p className="description">
              I have been working as a full-stack developer for about three
              years and continuously seek to expand my expertise in new
              technologies.
            </p>
            <p className="description">Some technologies I have worked with:</p>
          </div>
          <div className="grid-item">
            <div className="grid-carousel">
              <SkillCarousel skills={skills}/>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="section">
            <h2 className="description">Where I've worked</h2>
          </div>
          <div></div>
          <div className="grid-item employer">
            <div className="logo">
              <img
                src={"https://pointwest.com/wp-content/uploads/2024/06/Pointwest-logo-footer.svg-2.png"}
                alt="Pointwest Logo"
                style={{
                  height: 70,
                  margin: 10,
                  padding: 10,
                }}
              />
            </div>
          </div>
          <div className="grid-item">
            <ul>
              <li className="pikachu">
                Refactored legacy codebases for better maintainability and
                future updates.
              </li>
              <li className="pikachu">
                Led code reviews to improve team-wide code quality.
              </li>
              <li className="pikachu">
                Mentored junior developers, fostering collaboration.
              </li>
              <li className="pikachu">
                Deployed a scalable WordPress Lightsail instance with CDN, load
                balancer, RDS, and custom domain.
              </li>
              <li className="pikachu">
                Integrated SNS notifications for efficient inquiry management.
              </li>
              <li className="pikachu">
                Maintained unit tests with Jasmine for stability and early issue
                detection.
              </li>
              <li className="pikachu">
                Optimized Lightsail cloud costs, balancing performance and
                budget.
              </li>
              <li className="pikachu">
                Unified two apps into a single solution, enhancing functionality
                and UX.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <div className="section">
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
          <div className="section">
            <h2 className="description">Certification</h2>
          </div>
          <div></div>
          <div className="grid-item logo">
            <img alt="logo"
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
      <div className="contact-form">
        <div className="formy">
          <div className="intro">
            <h2 className="description">Let’s take your ideas together.</h2>
            <p>Got something in mind?</p>
            <p>
              Share your thoughts with me, and I’ll make sure to get back to you
              promptly.
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
