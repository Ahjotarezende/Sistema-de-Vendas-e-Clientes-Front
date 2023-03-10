import React, { useState, useEffect } from "react";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, FormSearch } from "./Styled";
import { useForm } from "react-hook-form";
import ViewClient from "../../components/ViewClient/ViewClient.js";
import Pagination from "../../components/Pagination/Pagination";

const Clientes = ({ clientList, setClientList, setLogin }) => {
  const { register } = useForm();
  const [searchClient, setSearchClient] = useState("");
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);

  const lowerSearch = searchClient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  const filterList = clientList.filter((cliente) =>
    cliente.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(lowerSearch)
  );

  /*eslint-disable*/
  useEffect(() => {
    setLogin("");
  }, []);

  return (
    <DivPrincipal>
      <FormSearch>
        <InputComp
          value={searchClient}
          setValor={setSearchClient}
          register={register}
          textLabel="Procurar Cliente (Nome)"
          type="text"
          name="searchClient"
          setStart={setStart}
          setFinish={setFinish}
        />
      </FormSearch>
      {filterList.slice(start, finish).map((value) => (
        <ViewClient
          key={value.id}
          clientID={value.id}
          name={value.name}
          cnpj={value.cnpj}
          cpf={value.cpf}
          telefone={value.telefone}
          email={value.email}
          cidade={value.cidade}
          rua={value.rua}
          numerocasa={value.numero}
          firstIndi={value.firstIndi}
          secondIndi={value.secondIndi}
          thirdIndi={value.thirdIndi}
        />
      ))}
      {filterList.length > 9 && (
        <Pagination
          filterList={filterList}
          setFinish={setFinish}
          setStart={setStart}
        />
      )}
    </DivPrincipal>
  );
};

export default Clientes;
