import React from "react";
import { DivLabel, IDInfo, NameInfo, QuantInfo, CostInfo, FinalInfo } from "./Styled";

const LabelInfo = () => {
  return (
    <DivLabel>
        <IDInfo className="ID">ID</IDInfo>
        <NameInfo className="Name">Nome</NameInfo>
        <QuantInfo className="Quant">Quant.</QuantInfo>
        <CostInfo className="UnitCost">Valor Uni.</CostInfo>
        <FinalInfo className="FinalCost">Valor Tot.</FinalInfo>
    </DivLabel>
  );
};

export default LabelInfo;
