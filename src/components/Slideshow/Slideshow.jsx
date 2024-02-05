import React, { useState } from 'react';
import leftArrow from '../../assets/images/arrow_left.png';
import rightArrow from '../../assets/images/arrow_right.png';
import './slideshow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <img src={leftArrow} alt="Left arrow" className='arrow-left' onClick={prevSlide} />
      <img src={rightArrow} alt="Right arrow" className='arrow-right' onClick={nextSlide} />
    </div>
  );
}

export default Slideshow;
