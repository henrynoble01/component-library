import React from "react";
import { termsOfUse } from "../data";
import { StyledTermsOfUse } from "./StyledTermsOfUse";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { HashLink } from "react-router-hash-link";

const TermsOfUse = () => {
  return (
    <StyledTermsOfUse>
      {/* this is the navigation("navbar component") */}
      <Navigation />
      <div className='content'>
        <div className='info'>
          <h2>OutSystems - Website Terms of Use</h2>
          <p className='text-md'>Updated: Monday, April 3, 2017 - 11:45 GMT</p>
          <p className='text-md'>
            THIS WEBSITE TERMS OF USE APPLIES TO YOUR USE OF THE OUTSYSTEMS’
            WEBSITE (WWW.OUTSYSTEMS.COM) INCLUDING THE ACCESS TO A VARIETY OF
            RESOURCES SUCH AS DEVELOPER TOOLS, DOWNLOAD AREAS, COMMUNICATION
            FORUMS AND PRODUCT INFORMATION.
          </p>
          <p className='text-md'>
            THESE TERMS ARE NOT RELATED TO OUTSYSTEMS SUBSCRIPTION AGREEMENT
            WHICH IS LOCATED AT:
            WWW.OUTSYSTEMS.COM/LEGAL/MASTER-SUBSCRIPTION-AGREEMENT/.
          </p>
          <p className='text-md'>For information about cookies, click here</p>
        </div>
        <div className='index'>
          {/* get the titles from the array only  to use to hash links*/}
          {termsOfUse.map((item) => (
            <p className='text-md ' key={item.id}>
              <HashLink
                smooth
                to={`/terms-of-use/#${item.id}`}
                className='text-md link'>
                {item.id} - {item.title}
              </HashLink>
            </p>
          ))}
        </div>
        <section className='terms'>
          {/* get the the rest of the data  */}
          {termsOfUse.map((item) => (
            <article key={item.id} id={item.id} className='article'>
              <header className='text-md'>
                {item.id} - {item.title}
              </header>
              <span className='caption'>
                {item.caption.map((caption, index) => (
                  <p className='text-md' key={index}>
                    {caption}
                  </p>
                ))}
              </span>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </StyledTermsOfUse>
  );
};

export default TermsOfUse;
