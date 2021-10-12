import styled from "styled-components";

export const StyledLayout = styled.div`
  ul {
    list-style-type: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  height: 50px;
  font-size: var(--font-md);
  padding: 0 0.75rem;
  width: 100%;

  .nav-left,
  .nav-right {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    font-weight: 500;
  }
`;

export const StyledWelcomeBanner = styled.div``;
