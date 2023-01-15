import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoID = styled.div`
  border-right: 2px solid white;
  height: 100%;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
`;

export const InfoNome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const InfoQuant = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 2px solid white;
  padding-right: 10px;
`;

export const InfoVista = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 2px solid white;
  padding: 0 10px;
`;

export const InfoPrazo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const DivComum = styled.div`
  display: flex;
  height: 100%;
`;

export const DivComum2 = styled.div`
  display: flex;
  height: 100%;
  padding-right: 5.3rem;
`;

export const DivInfo = styled.div`
  color: white;
  border-radius: 10px;
  border: 2px solid white;
  width: 81%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`;

export const FormSearch = styled.div`
  padding-top: 2rem;
  max-height: 4rem;
  gap: 1rem;
  width: 82%;
  align-items: center;
  input {
    height: 2rem;
    background-image: url("https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png");
    background-repeat: no-repeat;
    background-size: 1.7rem;
    background-position: 98%;
  }
`;
