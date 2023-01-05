import React from "react";
import { DivLabel, IDInfo, FirstInfo, SecondInfo } from "./Styled";

const LabelInfo = () => {
  return (
    <DivLabel>
      <FirstInfo>
        <IDInfo className="ID">ID</IDInfo>
        <p className="Name">Nome</p>
      </FirstInfo>
      <SecondInfo>
        <p className="Quant">Quant.</p>
        <p className="UnitCost">Valor Uni.</p>
        <p className="FinalCost">Valor Tot.</p>
      </SecondInfo>
    </DivLabel>
  );
};

export default LabelInfo;
