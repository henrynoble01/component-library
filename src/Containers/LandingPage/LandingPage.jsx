import React, { useState } from "react";
// import "./LandingPage.css";
import {
  StyledLayout,
  StyledNavigation,
  StyledWelcomeBanner,
  StyledDashBoard,
  StyledFooter,
  StyledDashboarditems,
} from "./StyledLandingPage";
import { Images } from "../../Assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
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
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const { title, text, images } = blinkhubBenefits[index];

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
          {/* <StyledDashboarditems> */}
          <div className='item  left-one bg-white p-6 overflow-hidden '>
            <div className='inner flex  '>
              <div className='circle w-2/5 text-white'>
                <h3 className='text-2xl  font-bold mb-3'>Onboarding</h3>
                <p className=' text-lg w-11/12 font-semibold mb-3'>
                  Complete These Steps to start working with blinkhub
                </p>
                <p className='text-lg font-normal'>2 Completed / 3</p>
                {/* <div className='steps stepper'>
                <div className='line completed'></div>
                <div className='line completed'></div>
                <div className='line '></div>
              </div> */}
              </div>
              <div className='steps-list w-3/5  flex items-center  pl-5 '>
                <ul className='flex gap-y-3 flex-col  '>
                  {onboarding.map((item, index) => (
                    <li
                      key={index + item.text}
                      className='flex gap-x-3  items-start '>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='text-xl text-yellow-300'
                      />
                      <span className='text-lg'>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
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
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
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
                          key={i + element}
                          className={`position  ${
                            i <= index ? "bg-yellow-500" : "bg-red-900"
                          }`}></div>
                      </>
                    ))}
                  </div>
                </div>
                <div className='text'>
                  <img src={images} alt={title} className='icon' />
                  <span>{text}</span>
                </div>
                <div onClick={next} className='next'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item right-two '>
            <header>Top {topBenfits.length} Benefits</header>
            <section>
              {topBenfits.map((item, i) => (
                <article key={i + item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </section>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item bottom '>
            <header>Network of Partners</header>
            <section>
              {networkPartners.map((item, i) => (
                <div key={i + item.title} className='network'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </section>
          </div>
          {/* </StyledDashboarditems> */}
        </div>
      </StyledDashBoard>

      <StyledFooter>
        <div className='content'>
          <div className='top '>
            <div className='logo img-container'>
              <img src={Images.BlinkHubLogo} alt='BlinkHub Logo' />
            </div>
            <div className=''>
              <header className='text-xl '>Business Ecosystem Linkages</header>
              <div className='list  text-base   '>
                <div className='item '>#30 trans woji road 2nd floor</div>
                <div className='item '>Port Harcourt</div>
                <div className='item '>Rivers State</div>
                <div className='item '>Tel: +234 08033131904</div>
              </div>
            </div>

            <div className=''>
              <header>Legal</header>
              <div className='list'>
                <div className='item'>Terms and Conditions</div>
                <div className='item'>Cookie Policy</div>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <FontAwesomeIcon className='text-3xl' icon={faTwitterSquare} />
            <FontAwesomeIcon className='text-3xl' icon={faFacebookSquare} />
            <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
          </div>
        </div>
      </StyledFooter>
    </StyledLayout>
  );
};

export default LandingPage;
