import React, { Children, useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { FaLuggageCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { MdCategory, MdProductionQuantityLimits } from "react-icons/md";

import "./Sidebar.scss";
import logo from "../../../media/New folder/logo.svg";
import {
  Sidebar,
  //useProSidebar
} from "react-pro-sidebar";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { FaGem, FaHeart } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { GiSurferVan } from "react-icons/gi";
import DashboardSection from "../Dashboard/DashboardSection/DashboardSection";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const NavItem = [
  {
    id: 1,
    menu: "Product",
    path: "/product",
    icon: <GiSurferVan />,
  },
  {
    id: 2,
    menu: "Order",
    icon: <FaLuggageCart />,
  },
  {
    id: 3,
    path:"/categoryproduct",
    menu: "Categories",

    icon: <MdCategory />,
  },
];
function SidebarPage({ collapsed, setCollapsed, children}) {
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
    const sideContainer = document.querySelector(
      '[data-testid="ps-sidebar-root-test-id"]'
    );
    const mainContainer = document.querySelector(
      '[data-testid="ps-sidebar-container-test-id"]'
    );
    const navBar=document.querySelector('.css-ewdv3l')

    if (mainContainer || sideContainer) {
      mainContainer.style.width = collapsed ? "180px" : "60px";

      sideContainer.style.width = collapsed ? "256px" : "60px";
      navBar.style.display = collapsed? "flex":""
    }
  };

  return (
    <div className="container-fluid sidebar d-flex w-100 ">
      <div style={ {width:collapsed? "256px":"17rem",marginTop:"5px"}}>
      <div
        className={`app ${collapsed ? "toggled" : "nottoggled"}`}
        style={{ borderRight: collapsed ? "0px" : "", position: "fixed" }}
        onClick={() => handleCollapsedChange}
      >

          <main
            style={{
              width: collapsed ? "60px" : "11.9rem",
              transition: "width 0.2s ease",
              borderRight: "0px",
            }}
          >
            <Menu>
              {collapsed ? (
                <MenuItem icon={<FaBars />} onClick={handleCollapsedChange} />
              ) : (
                <MenuItem
                  suffix={<FiChevronsLeft />}
                  onClick={handleCollapsedChange}
                >
                  <div
                  >
                    <img src={logo} alt="" width={100} />
                  </div>
                </MenuItem>
              )}
              <hr />
            </Menu>
              <Menu>
                <Link to="/admin-panel">
              <MenuItem icon={<RiHome4Line />}>
                {collapsed ? null : "Dashboard"}
              </MenuItem>
                </Link>
              {NavItem.map((item) =>
                item.subitem ? (
                  <SubMenu
                    key={item.id}
                    label={collapsed ? null : item.menu}
                    icon={item.icon}
                  >
                    <li key={item.id}>
                      <ul>
                        {item.subitem.map((subitem, index) => (
                          <MenuItem key={index}>{subitem}</MenuItem>
                        ))}
                      </ul>
                    </li>
                  </SubMenu>
                ) : (
                  <NavLink to={item.path}>
                    <MenuItem key={item.id} icon={item.icon} >
                      {collapsed ? null : item.menu} 
                    </MenuItem>
                  </NavLink>
                )
              )}
            </Menu>
          </main>
      </div>
      </div>
      <div className="mainContainer " style={{width:collapsed?"":"calc(100% - 256px)"}}>
        {children}
      </div>
    </div>
  );
}

export default SidebarPage;
