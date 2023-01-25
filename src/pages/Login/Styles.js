import styled from "styled-components";

export const DivPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #232323, #00004a);
`;

export const FormLogin = styled.form`
  img {
    width: 5rem;
  }
  background-image: linear-gradient(to top, #dedede);
  max-height: 20rem;
  max-width: 22rem;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3), 10px 0px 20px rgba(0, 0, 0, 0.3);
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
