import React, { useState } from "react";
// import "./LandingPage.css";
import {
  StyledLayout,
  StyledNavigation,
  StyledWelcomeBanner,
  StyledDashBoard,
} from "./StyledLandingPage";
import { Images } from "../../Assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  onboarding,
  navItems,
  blinkhubBenefits,
  topBenfits,
  networkPartners,
} from "./data";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const { title, text, icon } = blinkhubBenefits[index];

  const checkIndex = (number) => {
    if (number > blinkhubBenefits.length - 1) {
      return 0;
    }
    return number;
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

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
              <div className='card'>
                <div className='circle '>
                  <h3>Top {blinkhubBenefits.length} Benefits of BlinkHub</h3>
                  <p>{title}</p>
                  <div className='slide-index '>
                    {blinkhubBenefits.map((element, i) => (
                      <>
                        <div
                          className={`position  ${
                            i <= index ? "bg-yellow-500" : "bg-red-900"
                          }`}></div>
                      </>
                    ))}
                  </div>
                </div>
                <div className='text'>
                  <FontAwesomeIcon className='icon' icon={icon} />
                  <span>{text}</span>
                </div>
                <div onClick={next} className='next'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>

          <div className='item right-two '>
            <header>Top {topBenfits.length} Benefits</header>
            <section>
              {topBenfits.map((item) => (
                <article>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </section>
          </div>

          <div className='item bottom '>
            <header>Network of Partners</header>
            <section>
              {networkPartners.map((item) => (
                <div className='network'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </StyledDashBoard>
    </StyledLayout>
  );
};

export default LandingPage;
