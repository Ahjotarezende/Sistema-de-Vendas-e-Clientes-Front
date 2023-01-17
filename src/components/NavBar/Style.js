import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";

export const FaListUI = styled(FaList)`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  color: white;
  display: none;
  @media (max-width: 600px) {
    display: unset;
  }
`;

export const Navegation = styled.nav`
  padding: 0 1rem;
  font-size: 1em;
  background-image: linear-gradient(to bottom, #282727, #3e3e3e);
  height: 4.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 20px;
  }
  &.login{
    display: none;
  }
  @media (max-width: 600px) {
    .openDiv {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2rem;
      justify-content: start;
      margin-top: 2rem;
      margin-right: 3rem;
    }
    .notView {
      display: none;
    }
    .view {
      flex-direction: column;
      height: 100%;
    }
    &.viewNav {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-color: #f5f5f5;
      opacity: 0.8;
      .notViewImg {
        display: none;
      }
    }
  }
`;

export const LinkPage = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #4169e1;
  }
`;

export const LinkImg = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    height: 100%;
    cursor: pointer;
  }
`;
