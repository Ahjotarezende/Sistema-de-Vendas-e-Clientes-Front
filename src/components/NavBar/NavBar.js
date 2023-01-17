import React, { useState } from "react";
import { Navegation, LinkPage, LinkImg, FaListUI } from "./Style";
import Bag from "../../assets/Bag - PNG.png";
import BagBranca from "../../assets/Bag - Branca PNG.png";

const NavBar = ({
  open,
  setOpen,
  openDiv,
  setOpenDiv,
  openNavegation,
  setOpenNavegation,
  login
}) => {
  const [logo, setLogo] = useState(Bag);

  return (
    <Navegation className={`${openNavegation} ${login}`}>
      <LinkImg to="/home" className="notViewImg">
        <img
          src={logo}
          alt="Logo da loja"
          onMouseEnter={() => setLogo(BagBranca)}
          onMouseLeave={() => setLogo(Bag)}
        />
      </LinkImg>
      <div className={openDiv}>
        <FaListUI
          onClick={() => {
            if (open === "notView") {
              setOpenDiv("openDiv");
              setOpen("view");
              setOpenNavegation("viewNav");
            } else {
              setOpenDiv("");
              setOpen("notView");
              setOpenNavegation("");
            }
          }}
        />
        <ul className={open}>
          <LinkPage to="/clientes">Clientes</LinkPage>
          <LinkPage to="/vendasFeitas">Vendas</LinkPage>
          <LinkPage to="/cadastrarCliente">Cad. Cliente</LinkPage>
          <LinkPage to="/cadastrarItem">Cad. Item</LinkPage>
          <LinkPage to="/realizarVenda">Real. Venda</LinkPage>
        </ul>
      </div>
    </Navegation>
  );
};

export default NavBar;
