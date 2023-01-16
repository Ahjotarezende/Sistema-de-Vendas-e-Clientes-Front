import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75%;
  margin: 0 auto;
  width: 82%;
  display: flex;
  div:first-child {
    margin-top: 2rem;
    width: 100%;
  }
  flex-direction: column;
  gap: 1.8rem;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 98%;
    height: 2rem;
  }
  @media (max-width: 600px) {
    min-height: 84.2vh;
  }
`;
