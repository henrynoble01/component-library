import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { StyledFooter } from "./StyledFooter";
import { Images } from "../../../Assets/Assets";

const Footer = () => {
  return (
    <>
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
                <div className='item'>
                  <Link to='/terms-of-use'>Terms and Conditions</Link>
                </div>
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
    </>
  );
};

export default Footer;
