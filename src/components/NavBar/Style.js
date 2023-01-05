import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navegation = styled.nav`
  padding: 0 1rem;
  font-size: 1em;
  background-color: #0f0d0d;
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
    color: #ffdb00;
  }
`;

export const LinkImg = styled(Link)`
  height: 100%;
  img {
    height: 100%;
    cursor: pointer;
  }
`;
