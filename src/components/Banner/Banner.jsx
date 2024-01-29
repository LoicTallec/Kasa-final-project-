import React from 'react';
import './banner.css';

function Banner({ src, alt, content="" }) {
  return (
    <header>
      <img src={src} alt={alt} />
      <p>{content}</p>
    </header>
  );
}

export default Banner;
