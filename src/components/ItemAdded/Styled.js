import styled from "styled-components";

export const DivPrincipal = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 10px;
  margin-top: 1rem;
  height: 3rem;
  background-color: gray;
  .quantProduto {
    font-weight: 700;
    text-align: center;
    background: none;
    border: 2px solid white;
    border-radius: 6px;
    height: 50%;
    width: 3.2rem;
    color: white;
    margin: auto 0;
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  width: 50%;
`;

export const SecondDiv = styled.div`
  display: flex;
`;

export const TextName = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  color: white;
  font-weight: 700;
  margin-left: 1rem;
`;

export const DeleteButton = styled.button`
  color: white;
  background-color: red;
  padding: 1rem;
  height: 100%;
  border: none;
  font-weight: 700;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: darkred;
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  color: black;
  align-items: center;
  justify-content: end;
  padding-right: 1rem;
  &.notView {
    display: none;
  }
`;

export const ConfirmQuant = styled.button`
  align-self: center;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  &.green {
    background-color: green;
  }
`;

export const TextID = styled.p`
  width: 2rem;
  justify-content: center;
  display: flex;
  border-right: 2px solid white;
  align-items: center;
  color: white;
  font-weight: 700;
`;

export const TextValor = styled.p`
  display: flex;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  color: white;
  border-left: 2px solid white;
  border-right: 2px solid white;
  width: 4.8rem;
  justify-content: center;
  font-weight: 700;
`;

export const TextValorFinal = styled.p`
  display: flex;
  display: flex;
  align-items: center;
  color: white;
  border-right: 2px solid white;
  width: 4.7rem;
  justify-content: center;
  font-weight: 700;
`;
