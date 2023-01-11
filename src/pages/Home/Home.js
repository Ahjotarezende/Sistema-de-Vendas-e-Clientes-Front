import React, { useState } from "react";
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
import ViewProduct from "../../components/ViewProduct/ViewProduct.js";
import Pagination from "../../components/Pagination/Pagination";

const Home = ({ productList }) => {
  const { register } = useForm();
  const [searchItem, setSearchItem] = useState("");
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(9);

  const lowerSearch = searchItem.toLowerCase();

  const filterList = productList.filter((produto) =>
    produto.name.toLowerCase().includes(lowerSearch)
  );

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
            key={value.id}
            productID={value.id}
            quant={value.quantidade}
            name={value.name}
            precoCompra={value.compra.toFixed(2)}
            price={value.vista.toFixed(2)}
            priceCheque={value.cheque.toFixed(2)}
            priceTerm={value.prazo.toFixed(2)}
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
