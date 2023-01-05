import React, { useState, useEffect } from "react";
import InputComp from "../../components/InputComp/InputComp";
import { DivPrincipal, FormSearch } from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";
import ViewClient from "../../components/ViewClient/ViewClient.js";
import Pagination from "../../components/Pagination/Pagination";

const Clientes = () => {
  const { register } = useForm();
  const [searchClient, setSearchClient] = useState("");
  const [clientList, setClientList] = useState([]);
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);

  const lowerSearch = searchClient.toLowerCase();

  const filterList = clientList.filter((cliente) =>
    cliente.nome.toLowerCase().includes(lowerSearch)
  );

  useEffect(() => {
    Axios.get("http://localhost:3001/getClients").then((response) => {
      setClientList(response.data);
    });
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
          key={"cliente" + value.id}
          clientID={value.id}
          name={value.nome}
          pagamento={value.pagamento}
          cpf={value.cpf}
          telefone={value.telefone}
          nasc={value.nasc}
          email={value.email}
          cidade={value.cidade}
          rua={value.rua}
          numerocasa={value.numerocasa}
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
