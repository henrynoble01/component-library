import React from "react";
// import PropTypes from 'prop-types'
import "./ContentContainer.css";

const ContentContainer = ({ toggleBtn, children }) => {
  return (
    <div className={`content-wrapper ${toggleBtn ? "collapsed" : ""}`}>
      {children}
    </div>
  );
};

// ContentContainer.propTypes = {

// }

export default ContentContainer;
