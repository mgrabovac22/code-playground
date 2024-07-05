import React, { useState } from 'react';
import './list.css';

const Collapsible = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <span>{title}</span>
      </div>
      {!isCollapsed && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;