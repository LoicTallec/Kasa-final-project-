import React, { useState, useEffect } from 'react';
import mountainForests from '../../assets/images/mountain-forests.png';
import './about.css';
import Collapse from '../../components/Collapse/Collapse';
import data from '../../assets/about.json';
import Banner from '../../components/Banner/Banner';

const About = () => {
    return (
        <main>
            <Banner src={mountainForests} alt="Forêt montagneuse" />
            {data.map((about, index) => (
                <Collapse key={index} title={about.title} content={about.content} />
            ))}
        </main>
    )
}

export default About;


