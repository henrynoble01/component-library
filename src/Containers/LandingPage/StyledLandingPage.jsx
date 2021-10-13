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
  padding-bottom:30px;

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

  .item{
box-shadow: var(--light-shadow);
  }

  .left-one {
    grid-area: left-1;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: var(--clr-white);
    

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
    overflow: hidden;
    background-color: var(--clr-white);
    padding: 0 0 0 1em;
    box-shadow: var(--light-shadow);

    .header {
      font-size: var(--font-md);
      font-weight: 700;
      padding: 0.75rem 0;
    }

    .benefits {
      height: 19em;
      overflow:hidden;

    }
    
    .card {
      display: flex;
      box-shadow: var(--light-shadow);
      gap: 0.75rem;
      background-color:var(--clr-white);
      height:100%;
      position: relative;

      .circle {
        padding: 10px;
        color: var(--clr-white);
        // clip-path: ellipse(92% 84% at 7% 52%);
        height:100%;
        width:40%;
        display:flex;
        flex-flow: column wrap;
        justify-content:space-between;
        padding:10px 0 20px 10px;

        & > * {
        position: relative;
      }

      .slide-index{
        display: flex;
        justify-content: space-between;
        width: 90%;

        .position{
          height:0.75em;
          width:0.75em;

          // .passed{}
        }
      }

        &::before{
        position: absolute;
        content: "";
        height:360px;
        width:360px;
        border-radius: 50%;
        background-color: rgba(17,24,39,1);
        top: -50px;
        left: -83px;
        }
      }

        h3{
        font-size: var(--font-md);
        font-weight: 700;
        // text-align: center;
        }
        
        p{
          font-size: var(--font-sm);
          font-weight: 600;
        }
    }

    .text{
      width:55%;
      font-size: var(--font-sm);
      font-weight: 700;
      display:flex;
      align-items: flex-start;
      gap:.875em;
      
      .icon{
        width:10%;
      }

      span{
        width:90%;
        font-size: var(--font-xm) ;
      }
    }

    .next{
      width:5%;
      display:flex;
      align-items: center;
      justify-content:center;
      font-size:1.5em;
      user-select: none;
    }
      }
    }
  }

  .right-two {
    grid-area: right-2;
    background-color:var(--clr-white);
    padding: 5px 0 0 10px ;

    header{
      font-size: var(--font-md);
      font-weight:700;
      margin-bottom:5px;
    }

    section{
      display: flex;
      flex-direction: column;
      row-gap : 1em;
      height: 100%;
    }
    article{
      
      h4{
        font-size: var(--font-xm);
        font-weight : 700;
      }

      p{
        font-size: var(--font-xs);
        font-weight : 600;
      }
    }
  }

  .bottom {
    grid-area: bottom;
    background-color:var(--clr-white);
    padding: 1rem;

      header{
        color:var(--clr-primary-3);
        font-size: var(--font-base);
        font-weight:700;
        margin-bottom:1em;
      }

      section{
        display: flex;
        flex-flow: row wrap;
        gap : 1em;

        &>*{
          /* <flex-grow>  <flex-shrink> <flex-basis> */
          flex: 1 1 30%;
        }
      }

      .network{
        h4{
          color: var(--clr-primary-3);
          font-size: var(--font-sm);
          font-weight: 700;
        }

        p{
          font-size: var(--font-xs);
          font-weight: 600;
        }
  }
  }
`;
