import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
    min-height: 84.2vh;
  }
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
  width: 4%;
  height: 100%;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid white;
  @media (max-width: 600px) {
    width: 8%;
  }
`;

export const InfoNome = styled.div`
  display: flex;
  width: 65%;
  border-right: 2px solid white;
  color: white;
  margin-left: 0.3rem;
  height: 100%;
  align-items: center;
  @media (max-width: 600px) {
    width: 35%;
  }
`;

export const InfoQuant = styled.div`
  width: 6%;
  border-right: 2px solid white;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 600px) {
    width: 10%;
  }
`;

export const InfoVista = styled.div`
  border-right: 2px solid white;
  color: white;
  font-weight: 700;
  width: 10%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media (max-width: 600px) {
    width: 15%;
  }
`;

export const InfoPrazo = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 700;
  width: 10%;
  height: 100%;
  align-items: center;
  border-right: 2px solid white;
  margin-right: 7%;
  @media (max-width: 600px) {
    width: 15%;
    margin-right: 15%;
  }
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
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    width: 95%;
  }
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
