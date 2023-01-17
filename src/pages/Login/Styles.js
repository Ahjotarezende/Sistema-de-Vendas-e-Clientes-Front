import styled from "styled-components";

export const DivPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogin = styled.form`
  img {
    width: 5rem;
  }
  background-image: linear-gradient(to top, #2a2a2a, #3d3d3d);
  min-height: 20rem;
  min-width: 22rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background-image: linear-gradient(to top, #2047c0, #1a25aa);
  font-weight: 700;
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.7rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;
