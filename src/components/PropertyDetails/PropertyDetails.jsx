import React from 'react';
import './propertydetails.css';
function PropertyDetails({ tags, location }) {

return (
    <figure className="property-details">
        <b>{location}</b>
            <ul>
                {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                ))}
            </ul>
    </figure>
);
};

export default PropertyDetails;