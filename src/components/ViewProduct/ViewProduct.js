import React from "react";
import {
  DivPrincipal,
  DataID,
  FaTrashIcon,
  FaPencilAltIcon,
  DataName,
  DataPrice,
  DataTerm,
  DataQuant,
} from "./Styled";
import EditProduct from "../../components/EditProduct/EditProduct";
import DeletProduct from "../DeletProduct/DeletProduct";

const ViewProduct = ({
  productID,
  price,
  priceTerm,
  name,
  quant,
  priceViagem,
  precoCompra,
}) => {
  const [open, setOpen] = React.useState(false);
  const [openDelet, setOpenDelet] = React.useState(false);

  const editarProduto = () => {
    setOpen(true);
  };

  const deletarProduto = () => {
    setOpenDelet(true);
  };

  return (
    <DivPrincipal>
      <DeletProduct
        setOpenDelet={setOpenDelet}
        openDelet={openDelet}
        name={name}
        id={productID}
      />
      <EditProduct
        setOpen={setOpen}
        idProduto={productID}
        open={open}
        precoCompra={precoCompra}
        nomeProduto={name}
        quant={quant}
        precoVista={price}
        precoPrazo={priceTerm}
        precoViagem={priceViagem}
      />
      <DataID>{productID}</DataID>
      <DataName>{name}</DataName>
      <DataQuant>{quant}</DataQuant>
      <DataPrice>{price}</DataPrice>
      <DataTerm>{priceTerm}</DataTerm>
      <FaTrashIcon
        onClick={() => {
          deletarProduto();
        }}
      />
      <FaPencilAltIcon
        onClick={() => {
          editarProduto();
        }}
      />
    </DivPrincipal>
  );
};

export default ViewProduct;
