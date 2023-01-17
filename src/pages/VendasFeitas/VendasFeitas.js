import React, { useEffect, useState } from "react";
import { DivPrincipal } from "./Styled";
import InputComp from "../../components/InputComp/InputComp";
import { useForm } from "react-hook-form";
import ViewSales from "../../components/ViewSales/ViewSales";
import Pagination from "../../components/Pagination/Pagination";

const VendasFeitas = ({ arraySales, setLogin }) => {
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);
  const [searchSale, setSearchSale] = useState("");

  const { register } = useForm();

  const lowerSearch = searchSale.toLowerCase();

  const filterList = arraySales.filter((venda) =>
    venda.name.toLowerCase().includes(lowerSearch)
  );

  /*eslint-disable*/
  useEffect(() => {
    setLogin("");
  });

  return (
    <DivPrincipal>
      <InputComp
        value={searchSale}
        setValor={setSearchSale}
        register={register}
        textLabel="Procurar Venda - (Nome Cliente)"
        type="text"
        name="searchSale"
        setStart={setStart}
        setFinish={setFinish}
      />

      {filterList
        .reverse()
        .slice(start, finish)
        .map((value) => (
          <ViewSales
            key={"venda" + value.id}
            idVenda={value.id}
            name={value.name}
            dateSale={value.data}
            formaPagamento={value.pagamento}
            rota={value.rota}
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

export default VendasFeitas;
