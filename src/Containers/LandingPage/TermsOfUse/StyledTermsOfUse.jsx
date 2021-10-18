import styled from "styled-components";

export const StyledTermsOfUse = styled.div`
  padding: 0 20px;
  width: 100%;

  .content {
    max-width: var(--container);
    width: 90%;
    margin: 0 auto;
  }

  .info {
    margin-top: 10px;

    h2 {
      font-size: 3.3em;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      color: var(--clr-grey-1);
    }
  }

  .text-md {
    color: var(--clr-grey-3);
    line-height: 1.55;
    margin: 0 0 1rem 0;
    padding: 0;
    font-size: 1.25em;
  }

  .link {
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: all 200ms ease;
    width: max-content;

    &:hover {
      text-decoration: underline;
      //   border-bottom: 1.5px solid;
      width: max-content;
    }
  }

  .article {
    margin: 0;
  }
  .terms {
    padding-bottom: 30px;
  }
`;
