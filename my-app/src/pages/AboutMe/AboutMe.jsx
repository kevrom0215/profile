import React from "react";

const AboutMe = () => {
  const styles = {
    blinkingDot: {
      width: "10px",
      height: "10px",
      backgroundColor: "black", // Color of the dot
      borderRadius: "50%", // Make it a circle
      marginTop: "10px",
      animation: "blink 1s infinite", // Apply the blink animation
      marginLeft: '.5rem'
    },
    about: {
      display: "flex",
      flexDirection: "row", // Correct camelCase property
      alignItems: "left",
      textAlign: 'left' // Optional: vertically align items
    },
  };

  return (
    <div className="wrapper">
      <div style={styles.about}>
        <h2>Hi I am Kenneth</h2>
        <div style={styles.blinkingDot}></div>
      </div>
      {/* Define the keyframes outside of the styled div */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
      <p>
        My programming career started when I was still in college. 
      </p>
    </div>
  );
};

export default AboutMe;
