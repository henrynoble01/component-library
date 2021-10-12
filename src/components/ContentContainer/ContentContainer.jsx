import React, { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleContexts";
// import PropTypes from 'prop-types'
// import "./ContentContainer.css";
import { StyledContentWrapper } from "./StyledContentContainer";

const ContentContainer = ({ children }) => {
  const [toggleBtn] = useContext(ToggleContext);
  return (
    <StyledContentWrapper className={`${toggleBtn ? "collapsed" : ""}`}>
      {children}
    </StyledContentWrapper>
  );
};

// ContentContainer.propTypes = {

// }

export default ContentContainer;
