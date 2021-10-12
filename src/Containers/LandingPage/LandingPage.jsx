import React from "react";
// import "./LandingPage.css";
import { StyledLayout } from "./StyledLandingPage";

const navItems = [
  {
    id: 0,
    text: "Home",
    link: "#",
  },
  {
    id: 1,
    text: "About",
    link: "#",
  },
  {
    id: 2,
    text: "Partners",
    link: "#",
  },
  {
    id: 3,
    text: "Benefits",
    link: "#",
  },
  {
    id: 4,
    text: "Subscription",
    link: "#",
  },
];

const LandingPage = () => {
  return (
    <StyledLayout>
      <nav className='nav'>
        <ul className='nav-left'>
          {navItems.map((items) => (
            <li key={items.id}>{items.text}</li>
          ))}
        </ul>
        <div className='nav-right'></div>
      </nav>
    </StyledLayout>
  );
};

export default LandingPage;
