import React, { useState, useEffect } from "react";
import coffee from "../../assets/coffee.jpg";


const CoffeeList = ({ coffeeData }) => {
  const handleImageError = (e) => {
    e.target.src = coffee; // Fallback image in case the coffee image fails to load
  };

  return (
    <div style={{overflow:"auto"}}>
      <h2 style={{ textAlign: "center" }}>Coffee List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          overflow: "scroll"
        }}
      >
        {coffeeData && coffeeData.length > 0 ? (
          coffeeData.map((coffee) => (
            <div
              className="list-item"
              key={coffee.id}
              style={{ width: "250px", textAlign: "center" }}
            >
              <img
                src={coffee.image}
                alt={coffee.title}
                onError={handleImageError} // Handle broken images
                style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }}
              />
              <h2>{coffee.title}</h2>
            </div>
          ))
        ) : (
          <div>No coffee data available</div>
        )}
      </div>
    </div>
  );
};

const CoffeeSlideShow = ({ coffeeData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow: Advance to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle the "next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coffeeData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle the "previous" button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coffeeData.length - 1 : prevIndex - 1
    );
  };

  // If no data is available, return a fallback UI
  if (!coffeeData) {
    return <div>No coffee data available for slideshow</div>;
  }

  return (
    <div style={{height: "100%", 
      borderRadius: "20px"}}>
      <div style={{ position:"relative", width:"100%", height: "100%",
            borderRadius: "20px"}}>
        <img
          src={coffeeData[currentIndex].image}
          alt={coffeeData[currentIndex].title}
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            objectFit: "cover",
          }}
        />

        <button
          onClick={handlePrevious}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#10094; {/* Left arrow */}
        </button>

        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export { CoffeeList, CoffeeSlideShow };
