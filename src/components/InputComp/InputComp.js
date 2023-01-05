import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { DivInput } from "./Styled";

const InputComp = ({
  textLabel,
  name,
  type,
  step,
  min,
  register,
  setValor,
  setStart,
  setFinish,
}) => {
  return (
    <DivInput>
      <Label text={textLabel} htmlFor={name} />
      <Input
        type={type}
        name={name}
        setValor={setValor}
        step={step}
        min={min}
        register={register}
        setStart={setStart}
        setFinish={setFinish}
      />
    </DivInput>
  );
};

export default InputComp;
