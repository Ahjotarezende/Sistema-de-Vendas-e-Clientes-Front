import styled from "styled-components";

export const FooterPage = styled.footer`
  height: 4rem;
  background-image: linear-gradient(to bottom, #292828, #3e3e3e);
  color: white;
  p {
    align-items: center;
    display: flex;
    &:hover {
      color: #4169e1;
    }
  }
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  align-items: center;
  cursor: default;
  img {
    height: 100%;
  }
`;
