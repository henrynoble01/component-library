import React from "react";
import { StyledNavigation } from "./StyledSubNav";
import { navItems } from "../data";

const Navigation = () => {
  return (
    <div>
      <StyledNavigation>
        <div className='content'>
          <ul className='nav-left'>
            {navItems.map((items) => (
              <li className='nav-item' key={items.id}>
                {items.text}
              </li>
            ))}
          </ul>
          <div className='nav-right'>
            <div className='sign-up'>Sign Up</div>
            <div className='sign-up'>Login</div>
          </div>
        </div>
      </StyledNavigation>
    </div>
  );
};

export default Navigation;
