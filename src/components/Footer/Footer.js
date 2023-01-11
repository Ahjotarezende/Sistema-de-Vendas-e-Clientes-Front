import React, { useState } from "react";
import { FooterPage } from "./Styled";
import { FaRegCopyright } from "react-icons/fa";
import LogoLoja from "../../assets/Logo Geraldo - Preta PNG.png";
import LogoBrancaLoja from "../../assets/Logo Geraldo - Branca PNG.png";

const getData = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  const [logo, setLogo] = useState(LogoLoja);

  return (
    <FooterPage>
      <img
        src={logo}
        alt="Logo da loja"
        onMouseEnter={() => setLogo(LogoLoja)}
        onMouseLeave={() => setLogo(LogoBrancaLoja)}
      />
      <p>
        <FaRegCopyright />
        {getData()} Todos os direitos reservados
      </p>
    </FooterPage>
  );
};

export default Footer;
