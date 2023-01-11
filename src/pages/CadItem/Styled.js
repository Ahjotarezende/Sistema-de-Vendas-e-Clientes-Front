import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerValores = styled.form`
  border: 2px dashed white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  width: 80%;
  button {
    padding: 10px;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #4169e1;
    background-image: linear-gradient(to top, #242323, #3e3e3e);
    border: 1px solid white;
    border-radius: 5px;
    align-self: center;
    &:hover {
      color: white;
    }
  }
`;

export const DivForne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  input {
    width: 95%;
  }
`;
