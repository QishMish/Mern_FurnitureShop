import React, { useEffect, useState } from "react";
import "../styles/Filter-menu.css";
import { useGlobalContext } from "../context/AppContext";

function FilterPanel({categories, setCategories, setCurrentCategory}) {
  const { products } = useGlobalContext();
  const { loading, data, error } = products;

  useEffect(() => {
    setCategories( data.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    ))
  }, []);



  return (
    <div className="menu-panel">
      <div className="menu-items">
        {categories.map((item, index) => {
          return (
            <li key={index} className="menu-item" onClick={(e)=>setCurrentCategory(e.target.innerText)}>
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default FilterPanel;
