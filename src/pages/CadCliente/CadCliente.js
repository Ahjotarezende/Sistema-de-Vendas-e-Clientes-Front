import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, ContainerValores } from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";

const CadCliente = ({ clientList, setLogin }) => {
  const { register, handleSubmit } = useForm();

  /*eslint-disable*/
  useEffect(() => {
    setLogin("");
  });

  const onSubmit = (data) => {
    Axios.post(
      "https://loja-geraldo-back.onrender.com/client/client",
      data
    ).then((response) => {
      alert("Salvo com sucesso");
      document.location.reload();
    });
  };

  /*eslint-disable*/
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [cnpj, setCnpj] = useState();
  const [pagamento, setPagamento] = useState();
  const [telefone, setTelefone] = useState();
  const [nasc, setNasc] = useState();
  const [email, setEmail] = useState();
  const [cidade, setCidade] = useState();
  const [rua, setRua] = useState();
  const [numeroCasa, setNumeroCasa] = useState();
  const [indi, setIndi] = useState("");
  const [inditwo, setIndiTwo] = useState();
  const [indiThree, setIndiThree] = useState();

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
          name="name"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setCpf}
          textLabel="CPF"
          type="text"
          name="cpf"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setTelefone}
          textLabel="Telefone de contato"
          type="text"
          name="telefone"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setCnpj}
          textLabel="CNPJ"
          type="text"
          name="cnpj"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setEmail}
          textLabel="Email"
          type="text"
          name="email"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setCidade}
          textLabel="Cidade"
          type="text"
          name="cidade"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setRua}
          textLabel="Rua"
          type="text"
          name="rua"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setNumeroCasa}
          textLabel="N?? da casa"
          type="number"
          min="1"
          name="numero"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setIndi}
          textLabel="Indica????o 1"
          type="text"
          name="firstIndi"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setIndiTwo}
          textLabel="Indica????o 2"
          type="text"
          name="secondIndi"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setIndiThree}
          textLabel="Indica????o 3"
          type="text"
          name="thirdIndi"
        />
        <Button type="submit" text="Cadastrar" />
      </ContainerValores>
    </DivPrincipal>
  );
};

export default CadCliente;
