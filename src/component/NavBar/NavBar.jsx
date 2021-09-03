import React from "react";
// import { Icon } from "semantic-ui-react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='left-section'>
        <div className='logo'>
          <FontAwesomeIcon icon={faBars} />
          <span> App Logo</span>
        </div>
      </div>
      <div className='right-action'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default NavBar;
