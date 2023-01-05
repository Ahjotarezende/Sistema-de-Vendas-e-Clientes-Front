import React, { useEffect, useState } from "react";
import {
  DivPrincipal,
  AddItem,
  DivSearch,
  ClientInfo,
  FinishSale,
} from "./Styled";
import Axios from "axios";
import Select from "react-select";
import OnlyRead from "../../components/OnlyRead/OnlyRead";
import InputMask from "../../components/OnlyRead/InputMask";
import Label from "../../components/Label/Label";
import LabelInfo from "../../components/LabelInfo/LabelInfo";
import ItemAdded from "../../components/ItemAdded/ItemAdded";

const RealVenda = () => {
  const [arrayClients, setArrayClients] = useState([{}]);
  const [arrayItens, setArrayItens] = useState([{}]);
  const [lastID, setLastID] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedArrayProduct, setSelectedArrayProduct] = useState([]);
  const [approvedSale, setApprovedSale] = useState(false);
  const [cliente, setCliente] = useState({
    label: "",
    value: "",
    pagamento: "",
    cpf: "",
    telefone: "",
    nasc: "",
    email: "",
    cidade: "",
    rua: "",
    numerocasa: "",
  });

  const finalizarVenda = () => {
    selectedArrayProduct.map((data) => {
      return (
        (data["idCliente"] = cliente.value),
        (data["idVenda"] = Number(lastID) + 1)
      );
    });
    Axios.post("http://localhost:3001/registrarVenda", selectedArrayProduct);
    Axios.put("http://localhost:3001/editProductSold", selectedArrayProduct);
    document.location.reload();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getClients").then((response) => {
      setArrayClients(
        response.data.map((data) => ({
          label: data.nome,
          value: data.id,
          pagamento: data.pagamento,
          cpf: data.cpf,
          telefone: data.telefone,
          nasc: data.nasc,
          email: data.email,
          cidade: data.cidade,
          rua: data.rua,
          numerocasa: data.numerocasa,
        }))
      );
    });

    Axios.get("http://localhost:3001/getItems").then((response) => {
      setArrayItens(
        response.data.map((data) => ({
          label: data.nome,
          value: data.idProduto,
          quantidade: data.quantidade,
          precovista: data.precovista,
          precoprazo: data.precoprazo,
          precocheque: data.precocheque,
          precocompra: data.precocompra,
        }))
      );
    });

    Axios.get("http://localhost:3001/getLastID").then((response) => {
      const value = response.data.map((data) => data["max(idVenda)"]);
      value[0] === null ? setLastID(0) : setLastID(value[0]);
    });
  }, []);

  return (
    <DivPrincipal>
      <DivSearch>
        <Label text="Procurar Cliente" />
        <Select
          options={arrayClients}
          isSearchable={true}
          onChange={(cliente) => setCliente(cliente)}
        />
      </DivSearch>
      <ClientInfo>
        <OnlyRead valor={cliente.pagamento} text="Forma de Pagamento" />
        <OnlyRead valor={cliente.cidade} text="Cidade" />
        <OnlyRead valor={cliente.rua} text="Rua" />
        <OnlyRead valor={cliente.numerocasa} text="Nº da casa" />
        <InputMask valor={cliente.telefone} text="Telefone p/ contato" />
        <InputMask valor={cliente.cpf} text="CPF" />
      </ClientInfo>

      <AddItem>
        <Select
          options={arrayItens}
          onChange={(produto) => setSelectedProduct(produto)}
          className="selecionarItem"
        />
        <button
          disabled={!selectedProduct}
          onClick={() => {
            setSelectedArrayProduct([...selectedArrayProduct, selectedProduct]);
          }}
        >
          Adicionar Item
        </button>
      </AddItem>
      <LabelInfo />
      {selectedArrayProduct.map((data, i) => (
        <ItemAdded
          selectedArrayProduct={selectedArrayProduct}
          setSelectedArrayProduct={setSelectedArrayProduct}
          key={i}
          chave={i}
          cliente={cliente}
          item={data}
          pagamento={cliente.pagamento.toLowerCase()}
          setApprovedSale={setApprovedSale}
        />
      ))}
      {selectedArrayProduct.length ? (
        <FinishSale
          disabled={!approvedSale || !cliente.label}
          onClick={() => finalizarVenda()}
        >
          Concluir
        </FinishSale>
      ) : (
        ""
      )}
    </DivPrincipal>
  );
};

export default RealVenda;
