import React from 'react';
import './card.css';

function Card({ src, alt, content = "" }) {
  return (

    <figure className='card shadow'>
      <img src={src} alt={alt} />
        <figcaption className="card-content">{content}</figcaption>
    </figure>

  );
};

export default Card
