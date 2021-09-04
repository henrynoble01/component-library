import React, { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleContexts";
// import PropTypes from 'prop-types'
import "./ContentContainer.css";

const ContentContainer = ({ children }) => {
  const [toggleBtn] = useContext(ToggleContext);
  return (
    <div className={`content-wrapper ${toggleBtn ? "collapsed" : ""}`}>
      {children}
    </div>
  );
};

// ContentContainer.propTypes = {

// }

export default ContentContainer;
