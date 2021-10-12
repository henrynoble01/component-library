import React, { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleContexts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationArrow,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
// import "./Sidebar.css";
import { StyledSidebar } from "./StyledSidebar";

const nav = [
  { id: 0, text: "home", link: "/", icon: faHome },
  { id: 1, text: "Places", link: "/home", icon: faLocationArrow },
  { id: 2, text: "Welcome", link: "/home", icon: faHome },
  { id: 3, text: "Linkages", link: "/EcoPrefrences", icon: faLink },
  { id: 4, text: "EcoPrefrences", link: "/EcoPrefrences", icon: faHome },
];

const SideBar = () => {
  const [toggleBtn] = useContext(ToggleContext);

  return (
    <StyledSidebar className={`${toggleBtn ? "w-24 " : "w-64"} `}>
      <ul className={` sidebar-list`}>
        {nav.map((item) => (
          <SideBarItem key={item.id} {...item} collapsed={toggleBtn} />
        ))}
      </ul>
    </StyledSidebar>
  );
};

const SideBarItem = ({ link, icon, text, collapsed }) => (
  <li className={`${collapsed ? "flex-col " : "flex-row"} sidebar-item`}>
    <Link to={link} className={`${collapsed ? "collapsed" : " "} sidebar-link`}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className={` text`}>{text}</span>
    </Link>
  </li>
);

// SideBar.propTypes = {

// }

export default SideBar;
