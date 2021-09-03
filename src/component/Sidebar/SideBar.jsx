import React from "react";
import PropTypes from "prop-types";
import { Header, Icon } from "semantic-ui-react";
import "./Sidebar.css";

const nav = [
  { id: 0, text: "home", link: "/home", icon: "cart" },
  { id: 1, text: "Places", link: "/home", icon: "cart" },
  { id: 2, text: "Welcome", link: "/home", icon: "cart" },
  { id: 3, text: "Linkages", link: "/home", icon: "cart" },
];

const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        {nav.map((item) => (
          <li key={item.id} className='sidebar-item'>
            <Icon name={item.icon} />
            <Header as='h5' className='header'>
              {item.text}
            </Header>
          </li>
        ))}
      </ul>
    </div>
  );
};

// SideBar.propTypes = {

// }

export default SideBar;
