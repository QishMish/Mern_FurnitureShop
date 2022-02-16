import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navList = [
    {
      heading: "shop",
      url: "/shop",
      id: "#shop",
    },
    {
      heading: "blog",
      url: "/blog",
      id: "#blog",
    },
    {
      heading: "products",
      url: "/products",
      id: "#products",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-items">
        {navList.map((item) => {
          return (
            <NavLink to={item.url} className="nav-item" id={item.id} key={item.id}>
              {item.heading}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
