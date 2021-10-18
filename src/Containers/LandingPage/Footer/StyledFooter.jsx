import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: rgba(17, 24, 39, 1);
  color: var(--clr-white);
  padding: 3em;

  .content {
    width: 90%;
    max-width: var(--container);
    margin: 0 auto;
  }

  .top {
    display: flex;
    width: 70%;
    flex-flow: column wrap;
    row-gap: 2.1em;

    @media screen and (min-width: 800px) {
      flex-flow: row wrap;
      & > * {
        flex: 1 1 30%;
      }
    }
  }

  header {
    font-size: 1.25em;
    line-height: var(--line-height);
    font-weight: 700;

    @media screen and (min-width: 800px) {
      & {
        margin-bottom: 10px;
      }
    }
  }

  .item {
    &,
    & > * {
      line-height: var(--line-height);
      font-size: 1.125em;
      font-weight: 400;
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-end;
    gap: 1.75em;
  }
`;
