import styled from "styled-components";

export const StyledLayout = styled.div`
  ul {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    // object-fit: cover;
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
      // font-size: var(--font-md);
      font-size: 34px;
      font-weight: 600;
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
    display: flex;
    flex-flow: row wrap;
    // display: grid;
    // grid-template-columns: 100%;
    // grid-template-rows: auto;
    // grid-template-areas:
    //   "left-1"
    //   "left-2"
    //   "right1"
    //   "right2"
    //   "bottom";
    gap: 1.75rem;
  }

  & > * {
    flex: 1 1 100%;
    // padding:20px;
  }

  .item{
      box-shadow: var(--dark-shadow);
      border-radius: 10px;
  }


  .left-one{
    grid-area: left-1;
    position: relative;
    background-color:#222b34;
    color: var(--clr-white);

    @media screen and (min-width: 800px) {
      &{
        flex: 1 1 60%;
      }
    }
    
    @media screen and (min-width: 1280px) {
      background-color:var(--clr-white);
      color:var(--clr-grey-1);
      .inner{
        &::before {
      position: absolute;
      content: "";
      height: 360px;
      width: 360px;
      border-radius: 50%;
      // background-color: #222b34;
      background-color: rgba(17, 24, 39, 1);
      top: -90px;
      left: -39px;
    }
  
        & > * {
          position: relative;
        }
      }
    }
  }

  .right-one {
    grid-area: right-1;
    padding: 0.75rem;
    background-color: var(--clr-white);

    @media screen and (min-width: 800px) {
      &{
        flex: 1 1 35%;
      }
    }

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

    @media screen and (min-width: 800px) {
      &{
        flex: 1 1 60%;
      }
    }

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
        // justify-content: space-between;
        gap:10px;
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
        height:400px;
        width:400px;
        border-radius: 50%;
        background-color: rgba(17,24,39,1);
        top: -50px;
        left: -66px;
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

    @media screen and (min-width: 800px) {
      &{
        flex: 1 1 35%;
      }
    }

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
          flex: 1 1 45%;
        }
        
        @media screen and (min-width:1280){
          &>*{
            /* <flex-grow>  <flex-shrink> <flex-basis> */
            flex: 1 1 30%;
          }
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

export const StyledDashboarditems = styled.div`
  // display: flex;
  // gap: 1.75rem;
  // flex-flow: column wrap;
  background-color: var(--clr-white);
  box-shadow: var(--dark-shadow);
  border-radius: 10px;
  // padding: 24px;
  overflow: hidden;

  .left-one {
    // flex: 1 1 100%;
    order: 0;
  }
  .left-two {
    // flex: 1 1 100%;
    order: 1;
  }
  .right-one {
    // flex: 1 1 100%;
    order: 1;
  }
  .right-two {
    // flex: 1 1 100%;
    order: 1;
  }

  bottom {
    // flex: 1 1 100%;
    order: 2;
  }

  @media screen and (min-width: 800px) {
    // padding: 32px;

    .left-one {
      // flex: 1 1 60%;
      width: 100%;
      order: 10;
    }
    .left-two {
      // flex: 1 1 60%;
      order: 2;
    }
    .right-one {
      // flex: 1 1 35%;
      order: 3;
    }
    .right-two {
      // flex: 1 1 35%;
      order: 5;
    }

    bottom {
      // flex: 1 1 100%;
      order: 0;
    }
  }
`;

export const StyledFooter = styled.div`
  background-color: rgba(17, 24, 39, 1);
  color: var(--clr-white);
  padding: 3em;

  .top {
    display: flex;

    & > * {
      flex: 1 1 30%;
    }
  }

  .content {
    width: var(--container);
    margin: 0 auto;
  }

  header {
    font-size: 1.25em;
    line-height: 1.75em;
  }

  .item {
    margin: 0.5em;
  }

  .bottom {
    display: flex;
    justify-content: flex-end;
    gap: 0.75em;
  }
`;
