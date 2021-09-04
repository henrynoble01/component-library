import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Header, Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationArrow,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const nav = [
  { id: 0, text: "home", link: "/", icon: faHome },
  { id: 1, text: "Places", link: "/home", icon: faLocationArrow },
  { id: 2, text: "Welcome", link: "/home", icon: faHome },
  { id: 3, text: "Linkages", link: "/EcoPrefrences", icon: faLink },
  { id: 4, text: "EcoPrefrences", link: "/EcoPrefrences", icon: faHome },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`${collapsed ? "w-24 " : "w-64"} sidebar`}>
      <ul className={` sidebar-list`}>
        {nav.map((item) => (
          <SideBarItem key={item.id} {...item} collapsed={collapsed} />
        ))}
      </ul>
    </div>
  );
};

const SideBarItem = ({ link, icon, text, collapsed }) => (
  <li className={`${collapsed ? "flex-col " : "flex-row"} sidebar-item`}>
    <Link to={link} className={`${collapsed ? "collapsed" : ""} sidebar-link`}>
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
