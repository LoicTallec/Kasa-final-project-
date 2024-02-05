import React, { useState } from 'react';
import './collapse.css';

function Collapse({ title, content = '' }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <figure className="collapse-container">
      <button onClick={toggleCollapse} className="collapse-button">
        <i className={`fa-solid fa-caret-down ${isCollapsed ? '' : 'rotate-180'}`}></i>{title}
      </button>
      {isCollapsed ? null : <div className="content-expanded">{content}</div>}
    </figure>
  );
};

export default Collapse;
