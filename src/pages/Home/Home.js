import React, { useState, useEffect } from "react";
import InputComp from "../../components/InputComp/InputComp";
import {
  DivPrincipal,
  Content,
  FormSearch,
  DivInfo,
  DivComum2,
  DivComum,
  InfoID,
  InfoNome,
  InfoPrazo,
  InfoVista,
  InfoQuant,
} from "./Styled";
import { useForm } from "react-hook-form";
import Axios from "axios";
import ViewProduct from "../../components/ViewProduct/ViewProduct.js";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const { register } = useForm();
  const [searchItem, setSearchItem] = useState("");
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);
  const [productList, setProductList] = useState([]);

  const lowerSearch = searchItem.toLowerCase();

  const filterList = productList.filter((produto) =>
    produto.nome.toLowerCase().includes(lowerSearch)
  );

  useEffect(() => {
    Axios.get("http://localhost:3001/getItems").then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <DivPrincipal>
      <Content>
        <FormSearch>
          <InputComp
            value={searchItem}
            setValor={setSearchItem}
            register={register}
            textLabel="Procurar item (Nome)"
            type="text"
            name="searchItem"
            setStart={setStart}
            setFinish={setFinish}
          />
        </FormSearch>
        <DivInfo>
          <DivComum>
            <InfoID>ID</InfoID>
            <InfoNome>Nome</InfoNome>
          </DivComum>
          <DivComum2>
            <InfoQuant>Quant</InfoQuant>
            <InfoVista>A Vista</InfoVista>
            <InfoPrazo>A Prazo</InfoPrazo>
          </DivComum2>
        </DivInfo>
        {filterList.slice(start, finish).map((value) => (
          <ViewProduct
            key={value.idProduto}
            productID={value.idProduto}
            quant={value.quantidade}
            name={value.nome}
            precoCompra={value.precocompra.toFixed(2)}
            price={value.precovista.toFixed(2)}
            priceCheque={value.precocheque.toFixed(2)}
            priceTerm={value.precoprazo.toFixed(2)}
          />
        ))}
      </Content>
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

export default Home;
