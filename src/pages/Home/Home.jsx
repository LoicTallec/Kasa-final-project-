import React, { useState, useEffect } from 'react';
import landscape1 from '../../assets/images/landscape1.png';
import Card from '../../components/Card/Card';
import style from './home.css';
import datacc from '../../assets/logements.json';

const Home = () => {
    
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(datacc)
  }, [])

  console.log(cards);
  return (
    <main>
      
      <figure className='figlandscape'>
        <img src={landscape1} className="landscape" alt="Landscape" />
          <figcaption className="figcaplandscape">
            Chez vous, partout et ailleurs
          </figcaption>
      </figure>
      
      <Card />

    </main>
  );
};

export default Home;