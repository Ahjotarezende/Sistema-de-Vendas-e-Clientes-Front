import React from "react";
import Label from "../Label/Label";
import { InputMaskered } from "./Styled";

const InputMask = ({ valor, text }) => {
  if (text.toLowerCase().includes("cpf"))
    return (
      <div>
        <Label htmlFor={valor} text={text} />
        <InputMaskered
          id={valor}
          mask="999.999.999-99"
          readOnly
          value={valor}
        />
      </div>
    );
  else
    return (
      <div>
        <Label htmlFor={valor} text={text} />
        <InputMaskered
          id={valor}
          mask="(99) 9 9999-9999"
          readOnly
          value={valor}
        />
      </div>
    );
};

export default InputMask;
