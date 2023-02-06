import React, { useState } from "react";
import {
  DivPrincipal,
  ErrorMessage,
  TextID,
  TextValor,
  TextValorFinal,
  DeleteButton,
  TextName,
  ConfirmQuant,
} from "./Styled";

const defineCost = (pagamento, item) => {
  if (pagamento.includes("vista")) return item.vista;
  else if (pagamento.includes("viagem")) return item.viagem;
  else return item.prazo;
};

const ItemAdded = ({
  item,
  pagamento,
  setApprovedSale,
  setSelectedArrayProduct,
  selectedArrayProduct,
  setArrayItens,
  arrayItens,
}) => {
  const delProd = (op) => {
    if (classButton) {
      delete op.alterado;
      delete op.subtraiu;
      op.quantidade += Number(quantidade);
    }
    setArrayItens([...arrayItens, op]);
    const newList = selectedArrayProduct.filter((rdm) => {
      return rdm.label !== op.label;
    });
    setSelectedArrayProduct(newList);
  };

  const defineQuant = () => {
    item.quantidade -= quantidade;
    item["subtraiu"] = Number(quantidade);
    value ? (item["alterado"] = Number(value)) : (item["alterado"] = 0);
    setClassButton("green");
  };

  const [quantidade, setQuantidade] = useState(0);
  const [value, setValue] = useState();
  const [classButton, setClassButton] = useState("");

  if (classButton) setApprovedSale(true);
  else setApprovedSale(false);

  return (
    <DivPrincipal
      className={String(quantidade > item.quantidade && !classButton)}
    >
      <TextID>{item.value}</TextID>
      <TextName>{item.label}</TextName>
      {quantidade ? (
        quantidade > item.quantidade && !classButton ? (
          <>
            <ErrorMessage>Sem estoque. Lembre-se de atualizar!</ErrorMessage>
            <ConfirmQuant
              className={classButton}
              disabled={classButton}
              onClick={() => defineQuant()}
            ></ConfirmQuant>
          </>
        ) : (
          <ConfirmQuant
            className={classButton}
            disabled={classButton}
            onClick={() => defineQuant()}
          ></ConfirmQuant>
        )
      ) : (
        ""
      )}
      <input
        className="quantProduto"
        type="number"
        min={1}
        readOnly={classButton}
        onChange={(e) => {
          setQuantidade(e.target.value);
        }}
      />
      <TextValor
        type="number"
        value={value || defineCost(pagamento, item).toFixed(2)}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextValorFinal>
        {(quantidade * (value || defineCost(pagamento, item))).toFixed(2)}
      </TextValorFinal>
      <DeleteButton onClick={() => delProd(item)}>Deletar</DeleteButton>
    </DivPrincipal>
  );
};

export default ItemAdded;
