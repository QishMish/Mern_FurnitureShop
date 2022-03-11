import React from "react";
import "../styles/Filter-menu.css";
import { useGlobalContext } from "../context/AppContext";

function FilterPanel({ categories }) {
  const { setCategoryHandler } = useGlobalContext();
  return (
    <div className="menu-panel">
      <div className="menu-items">
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              className="menu-item"
              onClick={(e) => setCategoryHandler(item.toLowerCase())}
            >
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default FilterPanel;
