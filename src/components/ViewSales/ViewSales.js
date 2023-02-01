import React, { useState } from "react";
import {
  DivPrincipal,
  SaleID,
  FaTrashIcon,
  SaleName,
  SaleDate,
  FaEyeIcon,
} from "./Styled";
import DeletSale from "../DeletSale/DeletSale";
import InfoSale from "../../components/InfoSale/InfoSale";

const ViewSales = ({ name, idVenda, dateSale, formaPagamento, rota, clientList }) => {
  const [openDelet, setOpenDelet] = useState(false);
  const [open, setOpen] = useState(false);

  const deletarSale = () => {
    setOpenDelet(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <DivPrincipal>
      <InfoSale
        setOpen={setOpen}
        open={open}
        id={idVenda}
        name={name}
        dateSale={dateSale}
        formaPagamento={formaPagamento}
        rota={rota}
        clientList={clientList}
      />
      <DeletSale
        setOpenDelet={setOpenDelet}
        openDelet={openDelet}
        name={name}
        id={idVenda}
      />
      <SaleID>{idVenda}</SaleID>
      <SaleName>{name}</SaleName>
      <SaleDate>{dateSale}</SaleDate>
      <FaTrashIcon
        onClick={() => {
          deletarSale();
        }}
      />
      <FaEyeIcon
        onClick={() => {
          handleClickOpen();
        }}
      />
    </DivPrincipal>
  );
};

export default ViewSales;
