import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

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
      url: "/",
      id: "#products",
    },
  ];
  const menuLogic = showNav ? "nav-items nav-items-show " : "nav-items";

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  return (
    <>
      <GiHamburgerMenu className="menu" onClick={() => setShowNav(!showNav)} />
      <nav className="navbar">
        <div className={menuLogic}>
          {navList.map((item) => {
            return (
              <NavLink
                to={item?.url}
                className="nav-item"
                id={item.id}
                key={item.id}
              >
                {item.heading}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
