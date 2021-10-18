import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: #000;
  height: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;

  .content {
    padding: 0 0.75rem;
    font-size: var(--font-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--container);
    width: 90%;
    margin: 0 auto;
  }

  .nav-left,
  .nav-right {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    font-weight: 500;
  }
`;
