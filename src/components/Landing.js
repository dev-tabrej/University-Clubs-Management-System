import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Landing.css"; // Import your CSS file

import jamia1 from "../images/jamia-1.jpg";
import jamia2 from "../images/jamia-2.jpeg";
import jamia3 from "../images/jamia-3.jpeg";

const initialImageData = [
  {
    label: "Jamia Image 1",
    alt: "jamia-1",
    url: jamia1
  },
  {
    label: "Jamia Image 2",
    alt: "jamia-2",
    url: jamia2
  },
  {
    label: "Jamia Image 3",
    alt: "jamia-3",
    url: jamia3
  }
];

export default function Landing() {
  const [imageData, setImageData] = useState(initialImageData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUrlChange = (index, value) => {
    const updatedImageData = [...imageData];
    updatedImageData[index].url = value;
    setImageData(updatedImageData);
  };

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const renderSlides = imageData.map((image, index) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
   
    </div>
  ));

  const renderThumbnails = imageData.map((image, index) => (
    <img
      key={index}
      src={image.url}
      alt={image.alt}
      onClick={() => handleThumbnailClick(index)}
    />
  ));

  return (
    <div>
  
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel"
        >
          {renderSlides}
        </Carousel>
  

      {/* <div className="carousel-below">{renderThumbnails}</div> */}
    </div>
  );
}
