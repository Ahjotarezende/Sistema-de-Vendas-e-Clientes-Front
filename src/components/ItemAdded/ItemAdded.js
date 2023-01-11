import React, { useState } from "react";
import {
  DivPrincipal,
  ErrorMessage,
  TextID,
  TextValor,
  TextValorFinal,
  DeleteButton,
  TextName,
  FirstDiv,
  SecondDiv,
  ConfirmQuant,
} from "./Styled";

const defineCost = (pagamento, item) => {
  if (pagamento.includes("vista")) return item.vista;
  else if (pagamento.includes("cheque")) return item.cheque;
  else return item.prazo;
};

const ItemAdded = ({
  item,
  pagamento,
  setApprovedSale,
  setSelectedArrayProduct,
  selectedArrayProduct,
}) => {
  const delProd = (op) => {
    if (classButton) {
      op.quantidade += Number(quantidade);
      op.subtraiu = 0;
    }
    const newList = selectedArrayProduct.filter((rdm) => {
      return (
        (rdm.quantidade += rdm.subtraiu),
        (rdm.subtraiu = 0),
        rdm.label !== op.label
      );
    });
    setSelectedArrayProduct(newList);
    setClassButton("");
  };

  const defineQuant = () => {
    item.quantidade -= quantidade;
    item["subtraiu"] = Number(quantidade);
    setClassButton("green");
  };

  const [quantidade, setQuantidade] = useState(0);
  const [classButton, setClassButton] = useState("");

  if (classButton) setApprovedSale(true);
  else setApprovedSale(false);

  return (
    <DivPrincipal>
      <FirstDiv>
        <TextID>{item.value}</TextID>
        <TextName>{item.label}</TextName>
      </FirstDiv>
      <SecondDiv>
        {quantidade > item.quantidade && !classButton ? (
          <ErrorMessage>Você não tem essa quant. disponível</ErrorMessage>
        ) : (
          <ConfirmQuant
            className={classButton}
            disabled={classButton}
            onClick={() => defineQuant()}
          ></ConfirmQuant>
        )}
        <input
          className="quantProduto"
          type="number"
          min={0}
          readOnly={classButton}
          onChange={(e) => {
            setQuantidade(e.target.value);
          }}
        />
        <TextValor>{defineCost(pagamento, item)}</TextValor>
        <TextValorFinal>
          {quantidade * defineCost(pagamento, item)}
        </TextValorFinal>
        <DeleteButton onClick={() => delProd(item)}>Deletar</DeleteButton>
      </SecondDiv>
    </DivPrincipal>
  );
};

export default ItemAdded;
