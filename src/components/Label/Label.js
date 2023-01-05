import React from "react";
import { LabelTag } from "./Styled";

const Label = ({ htmlFor, text }) => {
  return <LabelTag htmlFor={htmlFor}>{text}</LabelTag>;
};

export default Label;
