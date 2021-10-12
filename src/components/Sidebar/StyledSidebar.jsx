import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: fixed;
  background-color: rgba(229, 231, 235, 1);
  height: 100%;
  top: 70px;
  height: calc(95%-70px);

  & .sidebar-list {
    height: auto;
    width: 100%;
  }

  .sidebar-item {
    padding: 0.75rem;

    & .sidebar-link {
      text-gray-700 font-semibold;
      display: flex;
      column-gap: 0.5rem;
      font-size: 1.5rem ;
      line-height: 2rem ;
      color: rgba(55, 65, 81, 1);
      font-weight: 600;
    }


    & .sidebar-link.collapsed {
      flex-direction: column;
      justify-content:center;
      align-items:center;

      & .text {
        font-size:0.75rem;
        line-height:1rem;
      }
    }
  }




`;
