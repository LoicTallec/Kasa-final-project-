import React, { useState } from 'react';
import style from './collapse.css';

const Collapse = ({ title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <article className="collapse-container">
            <button onClick={toggleCollapse} className="collapse-button">
                {isCollapsed ? '' : ''}{title}
            </button>
            {isCollapsed ? null : <div className="content-expanded">
                {content}</div>}
        </article>
    );
};

export default Collapse;