import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, ContainerValores, DivForne } from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";

const CadItem = ({ productList, setLogin }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const id =
      productList.length !== 0 ? productList[productList.length - 1].id + 1 : 1;
    Axios.post(
      `https://loja-geraldo-back.onrender.com/item/item/${id}`,
      data
    ).then((response) => console.log(response));
    alert("Salvando...");
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  };

  /*eslint-disable */
  const [item, setItem] = useState();
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [valorCompra, setValorCompra] = useState();
  const [valorVista, setValorVista] = useState();
  const [valorViagem, setValorViagem] = useState();
  const [valorPrazo, setValorPrazo] = useState();
  const [quant, setQuant] = useState();

  /*eslint-disable*/
  useEffect(() => {
    setLogin("");
  });

  return (
    <DivPrincipal>
      <ContainerValores onSubmit={handleSubmit(onSubmit)}>
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setItem}
          textLabel="Nome Item"
          type="text"
          name="name"
        />
        <DivForne>
          <InputComp
            setStart={setStart}
            setFinish={setFinish}
            register={register}
            setValor={setValorCompra}
            textLabel="Valor de custo"
            type="number"
            min="0.00"
            step="0.01"
            name="compra"
          />
          <InputComp
            setStart={setStart}
            setFinish={setFinish}
            register={register}
            setValor={setQuant}
            textLabel="Quantidade"
            type="number"
            min="0"
            name="quantidade"
          />
        </DivForne>
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setValorVista}
          textLabel="Valor de Venda - A vista"
          type="number"
          step="0.01"
          min="0.00"
          name="vista"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setValorPrazo}
          textLabel="Valor de Venda - Prazo"
          type="number"
          step="0.01"
          min="0.00"
          name="prazo"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setValorViagem}
          textLabel="Valor de Venda - Viagem"
          type="number"
          step="0.01"
          min="0.00"
          name="viagem"
        />
        <Button type="submit" text="Cadastrar!" />
      </ContainerValores>
    </DivPrincipal>
  );
};

export default CadItem;
