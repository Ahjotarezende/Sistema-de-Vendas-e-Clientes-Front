import React from "react";
import { ButtonComp } from "./Styles";

const Button = ({ type, text }) => {
  return <ButtonComp type={type}>{text}</ButtonComp>;
};

export default Button;
