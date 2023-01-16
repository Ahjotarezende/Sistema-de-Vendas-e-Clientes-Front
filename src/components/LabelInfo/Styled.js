import styled from "styled-components";

export const DivLabel = styled.div`
  width: 80%;
  height: 2.5rem;
  display: flex;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  align-items: center;
  margin-top: 1rem;
  .ID,
  .Quant,
  .UnitCost {
    border-right: 1.5px solid white;
  }
`;

export const IDInfo = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NameInfo = styled.div`
  width: 51%;
  height: 100%;
  display: flex;
  margin-left: 1%;
  justify-content: start;
  align-items: center;
  @media (max-width: 600px) {
    width: 18%;
  }
`;
export const QuantInfo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 20%;
  }
`;
export const CostInfo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 20%;
  }
`;

export const FinalInfo = styled.div`
  height: 100%;
  margin-left: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstInfo = styled.div`
  display: flex;
  height: 100%;
`;

export const SecondInfo = styled.div`
  display: flex;
  height: 100%;
  margin-right: 5%;
`;
