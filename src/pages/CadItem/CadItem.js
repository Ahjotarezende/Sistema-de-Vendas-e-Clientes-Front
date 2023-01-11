import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, ContainerValores, DivForne } from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";

const CadItem = ({ productList }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const id = productList.length + 1;
    Axios.post(`http://localhost:5000/item/item/${id}`, data).then((response) =>
      console.log(response)
    );
    document.location.reload();
  };

  /*eslint-disable */
  const [item, setItem] = useState();
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [valorCompra, setValorCompra] = useState();
  const [valorVista, setValorVista] = useState();
  const [valorCheque, setValorCheque] = useState();
  const [valorPrazo, setValorPrazo] = useState();
  const [quant, setQuant] = useState();

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
          textLabel="Valor de Venda"
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
          setValor={setValorCheque}
          textLabel="Valor de Venda - Cheque"
          type="number"
          step="0.01"
          min="0.00"
          name="cheque"
        />
        <Button type="submit" text="Cadastrar!" />
      </ContainerValores>
    </DivPrincipal>
  );
};

export default CadItem;
