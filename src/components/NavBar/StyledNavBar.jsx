import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: rgba(248, 113, 113, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  color: #fff;
  height: 70px;

  .brand {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3.75rem;
    column-gap: 0.5rem;
    line-height: 1;
  }

  .logo {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }

  .right-section {
    @apply flex gap-x-4;
    display: flex;
    column-gap: 1rem;
  }
`;
