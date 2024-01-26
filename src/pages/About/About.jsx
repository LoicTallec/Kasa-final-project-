import React, { useState, useEffect } from 'react';
import landscape2 from '../../assets/images/landscape2.png';
import style from './about.css';
import Collapse from '../../components/Collapse/Collapse';
import data from '../../assets/about.json';

const About = () => {
    return (
        <main>
            <figure className='figlscape'>
                <img src={landscape2} alt="Landscape" />
            </figure>
            {data.map((about, index) => (
                <Collapse key={index} title={about.title} content={about.content} />
            ))}
        </main>
    )
}

export default About;


