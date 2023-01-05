import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivSearch = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const AddItem = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 80%;
  justify-content: space-between;
  gap: 1rem;
  .selecionarItem {
    width: 100%;
  }
  button {
    background-color: orange;
    color: white;
    border: 2px solid black;
    border-radius: 10px;
    font-family: "Nunito", sans-serif;
    cursor: pointer;
    font-weight: 700;
    &:hover {
      border-color: white;
      color: black;
    }
  }
`;

export const ClientInfo = styled.div`
  margin-top: 1rem;
  gap: 1rem;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const FinishSale = styled.button`
  padding: 1rem;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  color: white;
  background-color: orange;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  bottom: 9%;
  margin: 1rem 0;
  &:hover {
    color: black;
  }
`;
