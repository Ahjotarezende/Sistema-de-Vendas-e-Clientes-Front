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
  if (pagamento.includes("vista")) return item.precovista;
  else if (pagamento.includes("cheque")) return item.precocheque;
  else return item.precoprazo;
};

const ItemAdded = ({
  item,
  pagamento,
  setSelectedArrayProduct,
  selectedArrayProduct,
  setApprovedSale,
  chave,
}) => {
  item["chave"] = chave;

  const delProd = (op, chave) => {
    setClassButton("");
    if (classButton) op.quantidade += Number(quantidade);
    const newList = selectedArrayProduct.filter((rdm) => rdm.chave !== chave);
    setSelectedArrayProduct(newList);
  };

  const defineQuant = () => {
    item.quantidade -= quantidade;
    item["subtraiu"] = Number(quantidade);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = `${year}-${month}-${day}`;
    item["dataVenda"] = date;
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
          <>
            <ConfirmQuant
              className={classButton}
              disabled={classButton}
              onClick={() => defineQuant()}
            ></ConfirmQuant>
            <ErrorMessage className="notView">
              Você não tem essa quant. disponível
            </ErrorMessage>
          </>
        )}
        <input
          className="quantProduto"
          type="number"
          defaultValue={quantidade}
          min={1}
          readOnly={classButton}
          onChange={(e) => {
            setQuantidade(e.target.value);
          }}
        />
        <TextValor>{defineCost(pagamento, item)}</TextValor>
        <TextValorFinal>
          {quantidade * defineCost(pagamento, item)}
        </TextValorFinal>
        <DeleteButton onClick={() => delProd(item, chave)}>
          Deletar
        </DeleteButton>
      </SecondDiv>
    </DivPrincipal>
  );
};

export default ItemAdded;
