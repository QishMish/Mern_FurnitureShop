import React from "react";
import "../styles/Filter-menu.css";
function FilterPanel() {
  const filterMenu = ["All", "Furniture", "Kitchen", "Lighting", "TableWare"];
  return (
    <div className="menu-panel">
      <div className="menu-items">
        {filterMenu.map((item, index) => {
          return <li key={index} className="menu-item">{item}</li>;
        })}
      </div>
    </div>
  );
}

export default FilterPanel;
