import React, { useState, useEffect } from "react";
import DigitalClock from "./DigitalClock";

function App() {
  const [backgroundImages, setBackgroundImages] = useState([
    "/src/assets/background-image1.jpg",
    "/src/assets/background-image2.jpg",
    "/src/assets/background-image3.jpg",
    "/src/assets/background-image4.jpg",
    "/src/assets/background-image5.jpg",
    "/src/assets/background-image6.jpg",
    "/src/assets/background-image7.jpg",
    "/src/assets/background-image8.jpg",
    "/src/assets/background-image9.jpg",
    "/src/assets/background-image10.jpg",
    "/src/assets/background-image12.jpg",
    "/src/assets/background-image13.jpg",
    "/src/assets/background-image14.jpg",
    "/src/assets/background-image15.jpg",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setOpacity(0); // Start fading out
      setTimeout(() => {
        setCurrentIndex(nextIndex); // Update current index after fade out
        setOpacity(1); // Start fading in
      }, 1000); // Delay to match the duration of the fade-out transition
    }, 60000); // Update every minute (60,000 milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundImages, nextIndex]);

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
          opacity: opacity,
        }}
      >
        <DigitalClock />
      </div>
    </>
  );
}

export default App;
