import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, ContainerValores } from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";

const CadCliente = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Axios.post("http://localhost:3001/registerClient", data).then((response) =>
      console.log(response)
    );
    document.location.reload();
  };

  /*eslint-disable*/
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [pagamento, setPagamento] = useState();
  const [telefone, setTelefone] = useState();
  const [nasc, setNasc] = useState();
  const [email, setEmail] = useState();
  const [cidade, setCidade] = useState();
  const [rua, setRua] = useState();
  const [numeroCasa, setNumeroCasa] = useState();

  return (
    <DivPrincipal>
      <ContainerValores onSubmit={handleSubmit(onSubmit)}>
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setNome}
          textLabel="Nome"
          type="text"
          name="getNomeCliente"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setCpf}
          textLabel="CPF"
          type="text"
          name="getCpf"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setPagamento}
          textLabel="Forma de pagamento"
          type="text"
          name="getPagamento"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setTelefone}
          textLabel="Telefone de contato"
          type="text"
          name="getTelefone"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setNasc}
          textLabel="Data de nascimento"
          type="date"
          name="getNascimento"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setEmail}
          textLabel="Email"
          type="text"
          name="getEmail"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setCidade}
          textLabel="Cidade"
          type="text"
          name="getCidade"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setRua}
          textLabel="Rua"
          type="text"
          name="getRua"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setNumeroCasa}
          textLabel="Nº da casa"
          type="number"
          min="1"
          name="getNumCasa"
        />
        <Button type="submit" text="Cadastrar!" />
      </ContainerValores>
    </DivPrincipal>
  );
};

export default CadCliente;
