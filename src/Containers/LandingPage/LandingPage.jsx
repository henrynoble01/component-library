import React from "react";
// import "./LandingPage.css";
import {
  StyledLayout,
  StyledNavigation,
  StyledWelcomeBanner,
  StyledDashBoard,
} from "./StyledLandingPage";
import { Images } from "../../Assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { onboarding, navItems, blinkhubBenefits } from "./data";

const LandingPage = () => {
  return (
    <StyledLayout>
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

      <StyledWelcomeBanner>
        <div className='content'>
          <div className='img-container'>
            <img src={Images.BlinkHubLogo} alt='BlinkHubLogo' />
          </div>
          <div className='text'>
            <h3>Welcome</h3>
            <span>To the world of business support</span>
          </div>
        </div>
      </StyledWelcomeBanner>
      <StyledDashBoard>
        <div className='content'>
          <div className='item  left-one '>
            <div className='circle'>
              <h3>Onboarding</h3>
              <p>Complete These Steps to start working with blinkhub</p>
              <p>2 Completed / 3</p>
              <div className='steps stepper'>
                <div className='line completed'></div>
                <div className='line completed'></div>
                <div className='line '></div>
              </div>
            </div>
            <div className='steps-list'>
              <ul>
                {onboarding.map((item, index) => (
                  <li key={index + item.text}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='item right-one '>
            <header>
              Business Clinic
              <FontAwesomeIcon className='icon' icon={faInfoCircle} />
            </header>
            <p>
              Our business advice and support will save you time and money,
              allowing you to concentrate on running your business.
            </p>
          </div>

          <div className='item left-two   '>
            <header className='header'>Blinkhub Benfits</header>
            <div className='benefits'>
              {blinkhubBenefits.map((item) => (
                <div key={item.id} className='card'>
                  <div className='circle '>
                    <h3>{item.title}</h3>
                  </div>
                  <div className='text'>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='item right-two bg-green-800 h-4 '></div>
          <div className='item bottom bg-green-400 h-4'></div>
        </div>
      </StyledDashBoard>
    </StyledLayout>
  );
};

export default LandingPage;
