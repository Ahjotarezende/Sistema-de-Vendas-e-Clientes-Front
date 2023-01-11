import styled from "styled-components";
import { Link } from "react-router-dom";

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
