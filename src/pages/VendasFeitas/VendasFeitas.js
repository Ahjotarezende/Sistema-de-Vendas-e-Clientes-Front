import React, { useEffect, useState } from "react";
import { DivPrincipal } from "./Styled";
import InputComp from "../../components/InputComp/InputComp";
import { useForm } from "react-hook-form";
import Axios from "axios";
import ViewSales from "../../components/ViewSales/ViewSales";
import Pagination from "../../components/Pagination/Pagination";

const VendasFeitas = () => {
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);
  const [searchSale, setSearchSale] = useState("");
  const [arraySales, setArraySales] = useState([]);

  const { register } = useForm();

  useEffect(() => {
    Axios.get("http://localhost:3001/getSales").then((response) => {
      setArraySales(response.data);
    });
  }, []);

  const lowerSearch = searchSale.toLowerCase();

  const filterList = arraySales.filter((venda) =>
    venda.nome.toLowerCase().includes(lowerSearch)
  );

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

      {filterList.slice(start, finish).map((value) => (
        <ViewSales
          key={"venda" + value.idVenda}
          idVenda={value.idVenda}
          name={value.nome}
          dateSale={value.dataVenda.slice(0, 10)}
          cpf={value.cpf}
          formaPagamento={value.pagamento}
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
