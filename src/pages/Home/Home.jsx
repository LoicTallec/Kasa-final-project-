import React from 'react';
import landscape1 from '../../assets/images/landscape1.png';

import Card from '../../components/Card/Card';

import Accomodations from '../../assets/logements.json';

const Home = () => {
    
  return (
    <main>
      {/* Contenu de ta page principale */}
      
      <img src={landscape1} alt="Landscape" />
      <Card />

    </main>
  );
};

export default Home;