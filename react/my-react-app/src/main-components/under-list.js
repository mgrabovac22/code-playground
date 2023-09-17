import React, { useState } from 'react';
import './under-list.css';

const UnderCollapsible = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="under-collapsible">
      <div className="under-collapsible-header" onClick={toggleCollapse}>
        <span>{title}</span>
      </div>
      {!isCollapsed && <div className="under-collapsible-content">{children}</div>}
    </div>
  );
};

export default UnderCollapsible;