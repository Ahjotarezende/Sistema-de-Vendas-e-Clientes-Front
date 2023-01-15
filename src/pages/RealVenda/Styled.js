import styled from "styled-components";

export const DivPrincipal = styled.div`
  &.none {
    min-height: 81.75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
  }
  min-height: 81.75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
  .selecionarItem {
    margin-top: 1rem;
    width: 80%;
  }
`;

export const Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  label {
    color: white;
    font-size: 1.2rem;
  }
  select {
    option{
      background-color: lightblue;
      color: black;
    }
    color: white;
    font-size: 1rem;
    border: 2px solid white;
    background-color: transparent;
    border-radius: 0.5rem;
    height: 100%;
  }
`;

export const DivSearch = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
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
  background-image: linear-gradient(to top, #0f0, #0a0);
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  bottom: 9%;
  margin: 1rem 0;
  &:hover {
    border-color: black;
    color: black;
  }
`;

export const Rota = styled.input`
  width: 79%;
  margin-top: 1.5rem;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  height: 2rem;
  background: none;
  border: 2px solid white;
  color: white;
  border-radius: 0.5rem;
  &:placeholder-shown {
    border-color: red;
  }
  &::placeholder {
    color: white;
  }
`;

export const Loading = styled.div`
  background-image: linear-gradient(to bottom, darkgreen, green);
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 40%;
  z-index: 1;
  &.none {
    display: none;
  }
`;
