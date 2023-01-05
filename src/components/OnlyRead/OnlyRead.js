import React from "react";
import { InputRead } from "./Styled";
import Label from "../Label/Label";

const OnlyRead = ({ valor, text }) => {
  return (
    <div>
      <Label htmlFor={valor} text={text} />
      <InputRead readOnly id={valor} value={valor} />
    </div>
  );
};

export default OnlyRead;
