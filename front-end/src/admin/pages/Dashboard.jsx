import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/Dashboard.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiArrowRightCircle } from "react-icons/fi";

function Dashboard() {
  const [showSlidebar, setShowSlidebar] = useState(false);

  const sideBarToggleHandler = () => {
    setShowSlidebar(!showSlidebar);
  };

  return (
    <>
      <div className="dashboard">
        <div className={showSlidebar ? "sidebar" : "sidebar close-sidebar"}>
          <ul className="admin-nav">
            <NavLink to="/dashboard" className="admin-item">
              Products
            </NavLink>
            <NavLink to="/dashboard/profile" className="admin-item">
              Profile
            </NavLink>
            <NavLink to="/dashboard/orders" className="admin-item">
              Orders
            </NavLink>
            {showSlidebar ? (
              <AiOutlineCloseCircle
                onClick={sideBarToggleHandler}
                className="sidebar-icon close"
              />
            ) : (
              <FiArrowRightCircle
                onClick={sideBarToggleHandler}
                className="sidebar-icon show"
              />
            )}
          </ul>
        </div>
        <div className="dash-body">
          <div className="dash-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
