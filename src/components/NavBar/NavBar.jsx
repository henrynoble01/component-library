import React, { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleContexts";
import { AuthContext } from "../../App";
import { StyledNavBar } from "./StyledNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [, setToggleBtn] = useContext(ToggleContext);
  const { state, dispatch } = useContext(AuthContext);
  const toggle = () => setToggleBtn((val) => !val);
  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <StyledNavBar>
      <div className='left-section'>
        <div className='brand' onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
          <span className='logo'> App Logo</span>
        </div>
      </div>
      <div className='right-section'>
        {state.isAuthenticated && <p className='user'>{state.email}</p>}
        <div className='brand' onClick={logout}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
      </div>
    </StyledNavBar>
  );
};
export default NavBar;
