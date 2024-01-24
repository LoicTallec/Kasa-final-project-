import React from 'react';
import { Link } from 'react-router-dom';
function Card({ datacc }) {
    return (

        <figure className='figcard'>
            <figcaption>{datacc}</figcaption>
        </figure>

    );
};

export default Card