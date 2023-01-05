import React from "react";
import { InputTag } from "./Styled";

const Input = ({
  type,
  name,
  setValor,
  step,
  min,
  register,
  setStart,
  setFinish,
}) => {
  return (
    <InputTag
      type={type}
      id={name}
      name={name}
      step={step}
      min={min}
      {...register(`${name}`, {
        onChange: (e) => {
          setStart(0);
          setFinish(9);
          setValor(e.target.value);
        },
      })}
    />
  );
};

export default Input;
