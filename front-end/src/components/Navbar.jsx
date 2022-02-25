import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context/AppContext";
import { logOut } from "../context/actions/authActions";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const { userState, dispatchUser } = useGlobalContext();

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
      heading: "login",
      url: "/login",
      id: "#login",
    },
    {
      heading: "logOut",
      url: "",
      id: "#logOut",
    },
  ];
  const menuLogic = showNav ? "nav-items nav-items-show " : "nav-items";

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  const logOutHandler = () => {
    dispatchUser(logOut());
    Navigate("/shop");
  };

  return (
    <>
      <GiHamburgerMenu className="menu" onClick={() => setShowNav(!showNav)} />
      <nav className="navbar">
        <div className={menuLogic}>
          <NavLink to="/shop" className="nav-item" id="shop">
            shop
          </NavLink>
          <NavLink to="/blog" className="nav-item" id="blog">
            blog
          </NavLink>
          {!userState.user && (
            <NavLink to="/login" className="nav-item" id="login">
              login
            </NavLink>
          )}
          {userState.user && (
            <>
              <NavLink to='/dashboard' className="nav-item" id="dashboard">
                Dashboard
              </NavLink>
              <div className="nav-item" id="logout" onClick={logOutHandler}>
                logout
              </div>
            </>
          )}

          {/* {navList.map((item) => {
            return (
              <NavLink
                to={item?.url ? item.url : ""}
                className="nav-item"
                id={item.id}
                key={item.id}
              >
                {item.heading}
              </NavLink>
            );
          })} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
