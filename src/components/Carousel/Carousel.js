import React, { useState } from "react";
import img1 from "../../assests/img1.jpg";
import img2 from "../../assests/img2.jpg";
import img3 from "../../assests/img3.jpg";
import img4 from "../../assests/img4.jpg";
import img5 from "../../assests/img5.jpg";
import img6 from "../../assests/img6.jpg";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5, img6]; // Correctly use imported images

  const [currentIndex, setCurrentIndex] = useState(0); // Initial index set to 0

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Loop to the last image
    );
  };

  return (
    <div className="relative w-full h-screen">
      {" "}
    
      {/* Display current image */}
      <div className="overflow-hidden w-full h-full">
        <div className="flex transition-all duration-500 ease-in-out w-full h-full">
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover" // Full width, full height, maintain aspect ratio
            />
          </div>
        </div>
      </div>
      {/* Next and Previous Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
