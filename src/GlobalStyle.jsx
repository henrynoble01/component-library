import { createGlobalStyle } from "styled-components";
// import CabinItalic from "./Assets/Font/Cabin/Cabin-Italic-VariableFont_wdth,wght.ttf";
// import Cabin from "./Assets/Font/Cabin/Cabin-VariableFont_wdth,wght.ttf";

// @font-face {
//   font-family:'Cabin';
//   src: local('Cabin'), local('cabin),
//   url(${CabinItalic}) format('truetype'),
//   url(${Cabin}) format('truetype');
// }
export const GlobalStyle = createGlobalStyle`



  * {
    font-size: var(--font-xs);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Cabin', sans-serif;
  }

  :root {
    --font-xs: 13px;
    --font-sm: 14px;
    --font-md: 20px;
    --font-xm: 16px;
    --font-base: 2em;
    --font-lg: 32px;
    --container: 100%;
    --bg-nav: #000;

    /* dark shades of primary color*/
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);
    /* primary/main color */
    --clr-primary-5: hsl(205, 78%, 60%);
    /* lighter shades of primary color */
    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-primary-7: hsl(205, 90%, 76%);
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);

      /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);

    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;

    /*box-shadow */
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  h1, h2, h3, h4, h5,h6{
    font-family: 'Cabin', sans-serif;
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

//   @media screen and (min-width: 1536px) {
//     :root {
//       --container: 1536px;
//     }
//   }


`;
