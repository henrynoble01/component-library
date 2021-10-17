import styled from "styled-components";

export const StyledLoginPage = styled.div`
  .content {
    background-color: rgba(209, 213, 219, 1);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-area {
      background-color: rgba(252, 165, 165, 1);
      padding-top: 1.25rem /* 20px */;
      padding-bottom: 1.25rem /* 20px */;
      padding-left: 1.5rem /* 24px */;
      padding-right: 1.5rem /* 24px */;
      width: 24rem /* 384px */;
      color: rgba(255, 255, 255, 1);
      border-radius: 1rem /* 16px */;

      h5 {
        font-size: 1.875rem /* 30px */;
        line-height: 2.25rem /* 36px */;
        margin-bottom: 2rem /* 32px */;
      }

      .form-extra {
        display: flex;
        justify-content: space-between;
      }

      label {
        color: var(--clr-white);
        font-size: 1rem /* 16px */;
        line-height: 1.5rem /* 24px */;
        text-transform: capitalize;
      }
    }

    .extra-details {
      margin-top: 3rem /* 48px */;
      display: flex;
      flex-direction: column;
      row-gap: 2rem /* 32px */;

      h6 {
        font-size: 1.5rem /* 24px */;
        line-height: 2rem /* 32px */;
        font-weight: 400;
        text-transform: capitalize;
      }
      p {
        font-size: 1rem /* 16px */;
        line-height: 1.5rem /* 24px */;
      }

      .social-icons {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem /* 8px */;
      }

      .brand-icons {
        display: flex;
        column-gap: 0.75rem /* 12px */;
        font-size: 3rem /* 48px */;
        line-height: 1;
        cursor: pointer;

        & > * {
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          transform: translateX(var(--tw-translate-x))
            translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

          &:hover {
            --tw-scale-x: 1.1;
            --tw-scale-y: 1.1;
          }
        }
      }

      .forgot-password {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
      }
      .sign-up {
        border-style: dotted;
        border-top-width: 2px;
        border-color: rgba(255, 255, 255, 0.8);

        p {
          margin-top: 1.75rem /* 28px */;
          margin-bottom: 1.75rem /* 28px */;
        }
      }
    }
  }
`;
