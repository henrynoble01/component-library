import React from "react";
// import "./LandingPage.css";
import { StyledLayout, StyledNavigation } from "./StyledLandingPage";
import { Images } from "../../Assets/Assets";

const navItems = [
  {
    id: 0,
    text: "Logo",
    link: "#",
  },
  {
    id: 1,
    text: "Home",
    link: "#",
  },
  {
    id: 2,
    text: "About",
    link: "#",
  },
  {
    id: 3,
    text: "Partners",
    link: "#",
  },
  {
    id: 4,
    text: "Benefits",
    link: "#",
  },
  {
    id: 5,
    text: "Subscription",
    link: "#",
  },
];

const LandingPage = () => {
  return (
    <StyledLayout>
      <StyledNavigation>
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
      </StyledNavigation>

      <div className='welcome-banner'>
        <div className='img-container'>
          <img src={Images.BlinkHubLogo} alt='BlinkHubLogo' />
        </div>
        <div className='text'>
          <h3>Welcome</h3>
          <span>To the world of business support</span>
        </div>
      </div>
    </StyledLayout>
  );
};

export default LandingPage;
