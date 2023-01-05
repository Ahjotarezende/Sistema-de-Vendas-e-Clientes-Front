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
  justify-content: space-between;
  .ID,
  .Quant,
  .UnitCost {
    border-right: 1.5px solid white;
  }
  p {
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IDInfo = styled.p`
  width: 1.5rem;
`;

export const FirstInfo = styled.div`
  display: flex;
  height: 100%;
`;

export const SecondInfo = styled.div`
  display: flex;
  height: 100%;
  margin-right: 4.6rem;
`;
