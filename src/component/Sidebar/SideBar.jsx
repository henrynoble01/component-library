import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Header, Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const nav = [
  { id: 0, text: "home", link: "/", icon: "cart" },
  { id: 1, text: "Places", link: "/home", icon: "cart" },
  { id: 2, text: "Welcome", link: "/home", icon: "cart" },
  { id: 3, text: "Linkages", link: "/EcoPrefrences", icon: "cart" },
  { id: 4, text: "EcoPrefrences", link: "/EcoPrefrences", icon: "cart" },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${collapsed ? "w-12 " : "w-64"} sidebar`}>
      <List className={`${collapsed ? "w-12 " : " w-52 "} sidebar-list`}>
        {nav.map((item) => (
          <SideBarItem key={item.id} {...item} collapsed={collapsed} />
        ))}
      </List>
    </div>
  );
};

const SideBarItem = ({ link, icon, text, collapsed }) => (
  <List.Item
    as={Link}
    to={link}
    className={`${collapsed ? "flex-col" : "flex-row"} sidebar-item`}>
    <Icon name={icon} />
    <Header as='h5' className='header'>
      {text}
    </Header>
  </List.Item>
);

// SideBar.propTypes = {

// }

export default SideBar;
