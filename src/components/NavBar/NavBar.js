import React from "react";
import { Navegation, LinkPage, LinkImg } from "./Style";
import LogoLoja from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <Navegation>
      <LinkImg to="/">
        <img src={LogoLoja} alt="Logo da Loja" />
      </LinkImg>
      <ul>
        <LinkPage to="/clientes">Clientes</LinkPage>
        <LinkPage to="/vendasFeitas">Vendas</LinkPage>
        <LinkPage to="/cadastrarCliente">Cad. Cliente</LinkPage>
        <LinkPage to="/cadastrarItem">Cad. Item</LinkPage>
        <LinkPage to="/realizarVenda">Real. Venda</LinkPage>
      </ul>
    </Navegation>
  );
};

export default NavBar;
