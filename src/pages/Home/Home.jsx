import React, { useState, useEffect } from 'react';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';
import './home.css';
import datacc from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
//import { Link } from 'react-router-dom';

const Home = () => {
    
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(datacc)
  }, [])

  console.log(cards);
  return (
    <main>
      
      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous, partout et ailleurs" />

      <ul className='allcards'>
        {datacc.map((card, index) => (
          
          <Card src={card.cover} alt={card.cover} content={card.title} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
