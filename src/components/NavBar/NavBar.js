import React, { useState } from "react";
import { Navegation, LinkPage, LinkImg } from "./Style";
import Bag from "../../assets/Bag - PNG.png";
import BagBranca from "../../assets/Bag - Branca PNG.png";

const NavBar = () => {
  const [logo, setLogo] = useState(Bag);

  return (
    <Navegation>
      <LinkImg to="/">
        <img
          src={logo}
          alt="Logo da loja"
          onMouseEnter={() => setLogo(BagBranca)}
          onMouseLeave={() => setLogo(Bag)}
        />
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
