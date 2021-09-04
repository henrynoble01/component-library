import React, { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleContexts";
// import { Icon } from "semantic-ui-react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [, setToggleBtn] = useContext(ToggleContext);
  const toggle = () => setToggleBtn((val) => !val);

  return (
    <nav className='nav'>
      <div className='left-section'>
        <div className='brand' onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
          <span className='logo'> App Logo</span>
        </div>
      </div>
      <div className='right-action'>
        <div className='brand'>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
