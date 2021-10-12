import styled from "styled-components";

export const StyledLayout = styled.div`
  * {
    font-size: var(--font-xs);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --font-xs: 13px;
    --font-sm: 14px;
    --font-md: 18px;
    --font-lg: 32px;
    --container: 100%;
  }

  @media screen and (min-width: 640px) {
    :root {
      --container: 640px;
    }
  }
  @media screen and (min-width: 768px) {
    :root {
      --container: 768px;
    }
  }
  @media screen and (min-width: 1024px) {
    :root {
      --container: 1024px;
    }
  }
  @media screen and (min-width: 1280px) {
    :root {
      --container: 1280px;
    }
  }
  @media screen and (min-width: 1536px) {
    :root {
      --container: 1536px;
    }
  }

  ul {
    list-style-type: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledNavigation = styled.nav``;
