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
    width: var(--container);
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

export const StyledWelcomeBanner = styled.div`
  padding: 20px 0;
  width: 100%;

  .content {
    width: var(--container);
    display: flex;
    margin: 0 auto;
    align-items: center;
    column-gap: 1rem;
  }

  .text {
    & h3 {
      font-size: var(--font-md);
      font-weight: 700;
    }

    span {
      font-style: italic;
      font-size: var(--font-sm);
    }
  }
`;

export const StyledDashBoard = styled.div`
  width: 100%;
  background-color: var(--clr-grey-10);
  padding-top: 30px;

  .content {
    width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "left-1 left-1 right-1"
      "left-2 left-2 right-2"
      "bottom bottom bottom";
    gap: 1.75rem;
  }

  .left-one {
    grid-area: left-1;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: var(--clr-white);
    box-shadow: var(--light-shadow);

    & .circle {
      padding: 20px;
      color: var(--clr-white);

      & > * {
        position: relative;
        z-index: 10;
        margin-bottom: 10px;
      }

      h3 {
        font-size: var(--font-md);
        font-weight: 700;
      }

      p {
        font-size: var(--font-xs);
        margin-bottom: 10px;
      }

      &::before {
        position: absolute;
        content: "";
        height: 360px;
        width: 360px;
        border-radius: 50%;
        background-color: rgba(17, 24, 39, 1);
        top: -119px;
        left: -15px;
      }
    }

    .steps-list {
      padding: 10px 5px 5px 10px;

      ul {
        display: flex;
        flex-direction: column;
        row-gap: 7px;

        li {
          display: flex;
          column-gap: 5px;
        }
      }
    }
  }

  .right-one {
    grid-area: right-1;
    padding: 0.75rem;
    background-color: var(--clr-white);
    box-shadow: var(--light-shadow);

    header {
      font-size: var(--font-md);
      font-weight: 700;

      .icon {
        margin-left: 0.5rem;
        color: var(--clr-primary-5);
      }
    }

    p {
      padding: 0.5rem;
      font-size: var(--font-sm);
      font-weight: 600;
    }
  }

  .left-two {
    grid-area: left-2;
  }

  .right-two {
    grid-area: right-2;
  }

  .bottom {
    grid-area: bottom;
  }
`;
