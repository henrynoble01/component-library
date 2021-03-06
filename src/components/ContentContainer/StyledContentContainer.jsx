import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  position: fixed;
  overflow: auto;
  top: 90px;
  left: 16rem;
  right: 20px;
  bottom: 20px;
  width: calc(100% - 16rem);
  transition: all 0.3s ease;

  &.collapsed {
    left: 6rem;
    width: calc(100% - 6rem);
  }
`;
