import React, { useEffect, useState } from "react";
import {
  DivPrincipal,
  Pagamento,
  DivSearch,
  ClientInfo,
  FinishSale,
  Rota,
  Loading,
} from "./Styled";
import Axios from "axios";
import Select from "react-select";
import OnlyRead from "../../components/OnlyRead/OnlyRead";
import InputMask from "../../components/OnlyRead/InputMask";
import Label from "../../components/Label/Label";
import LabelInfo from "../../components/LabelInfo/LabelInfo";
import ItemAdded from "../../components/ItemAdded/ItemAdded";

const RealVenda = ({ arraySales, openDiv, setLogin }) => {
  const [arrayClients, setArrayClients] = useState([{}]);
  const [arrayItens, setArrayItens] = useState([{}]);
  const [pagamento, setPagamento] = useState("A vista");
  const [viewLoading, setViewLoading] = useState("none");
  const [rotaViagem, setRotaViagem] = useState("");
  const [selectedArrayProduct, setSelectedArrayProduct] = useState([]);
  const [approvedSale, setApprovedSale] = useState(false);
  const [cliente, setCliente] = useState({
    label: "",
    value: "",
    cnpj: "",
    cpf: "",
    telefone: "",
    nasc: "",
    email: "",
    cidade: "",
    rua: "",
    numerocasa: "",
  });

  const finalizarVenda = () => {
    setViewLoading("");
    const name = cliente.label;
    const id = arraySales.length + 1;
    const rota = rotaViagem;
    const sale = [];
    const promisses = [];
    /*eslint-disable*/
    selectedArrayProduct.map((item) => {
      const newProduct = {
        id: item.value,
        name: item.label,
        vista: item.vista,
        prazo: item.prazo,
        viagem: item.viagem,
        quantidade: item.quantidade,
        compra: item.compra,
      };
      const produto = {
        name: item.label,
        quant: item.subtraiu,
        valor: pagamento.toLowerCase().includes("vista")
          ? item.alterado !== 0
            ? item.alterado
            : item.vista
          : pagamento.toLowerCase().includes("prazo")
          ? item.alterado !== 0
            ? item.alterado
            : item.prazo
          : item.alterado !== 0
          ? item.alterado
          : item.prazo,
      };
      sale.push(produto);
      promisses.push(
        Axios.put(
          "https://loja-geraldo-back.onrender.com/item/item",
          newProduct
        )
      );
    });
    Axios.post(
      `https://loja-geraldo-back.onrender.com/sale/sale/${name}/${id}/${rota}/${pagamento}`,
      sale
    );
    Promise.all(promisses);
    alert("Salvando...");
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  };

  useEffect(() => {
    setLogin("");
    Axios.get("https://loja-geraldo-back.onrender.com/client/client").then(
      (response) => {
        setArrayClients(
          response.data.map((data) => ({
            label: data.name,
            value: data.id,
            cnpj: data.cnpj,
            cpf: data.cpf,
            telefone: data.telefone,
            email: data.email,
            cidade: data.cidade,
            rua: data.rua,
            numerocasa: data.numero,
          }))
        );
      }
    );

    Axios.get("https://loja-geraldo-back.onrender.com/item/item").then(
      (response) => {
        setArrayItens(
          response.data.map((data) => ({
            label: data.name,
            value: data.id,
            quantidade: data.quantidade,
            vista: data.vista,
            prazo: data.prazo,
            viagem: data.viagem,
            compra: data.compra,
          }))
        );
      }
    );
  }, []);

  return (
    <>
      <Loading className={viewLoading}>Carregando...</Loading>
      <DivPrincipal className={viewLoading}>
        <DivSearch>
          <Label text="Procurar Cliente" />
          <Select
            options={arrayClients}
            isSearchable={true}
            onChange={(cliente) => setCliente(cliente)}
            className={openDiv}
          />
        </DivSearch>
        <ClientInfo>
          <Pagamento>
            <label>Pagamento</label>
            <select onChange={(e) => setPagamento(e.target.value)}>
              <option>A vista</option>
              <option>A prazo</option>
              <option>Viagem</option>
            </select>
          </Pagamento>
          <OnlyRead valor={cliente.cidade} text="Cidade" />
          <OnlyRead valor={cliente.rua} text="Rua" />
          <OnlyRead valor={cliente.numerocasa} text="Nº da casa" />
          <InputMask valor={cliente.telefone} text="Telefone" />
          <InputMask valor={cliente.cpf} text="CPF" />
        </ClientInfo>
        <Rota
          placeholder="Rota de viagem"
          onChange={(e) => setRotaViagem(e.target.value)}
        />
        {/* <AddItem> */}
        <Select
          options={arrayItens}
          onChange={(produto) =>
            setSelectedArrayProduct([...selectedArrayProduct, produto])
          }
          className={`selecionarItem ${openDiv}`}
        />
        <LabelInfo />
        {selectedArrayProduct.map((data, i) => (
          <ItemAdded
            selectedArrayProduct={selectedArrayProduct}
            setSelectedArrayProduct={setSelectedArrayProduct}
            key={data.label}
            item={data}
            pagamento={pagamento.toLowerCase()}
            setApprovedSale={setApprovedSale}
          />
        ))}
        {selectedArrayProduct.length ? (
          <FinishSale
            disabled={!approvedSale || !cliente.label || !rotaViagem}
            onClick={() => finalizarVenda()}
          >
            Concluir
          </FinishSale>
        ) : (
          ""
        )}
      </DivPrincipal>
    </>
  );
};

export default RealVenda;
