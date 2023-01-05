import React from "react";
import { FooterPage } from "./Styled";
import { FaRegCopyright } from "react-icons/fa";

const getData = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  return (
    <FooterPage>
      <FaRegCopyright />
      {getData()} Todos os direitos reservados
    </FooterPage>
  );
};

export default Footer;
