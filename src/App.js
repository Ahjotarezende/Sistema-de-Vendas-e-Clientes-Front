import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import VendasFeitas from "./pages/VendasFeitas/VendasFeitas";
import CadCliente from "./pages/CadCliente/CadCliente";
import CadItem from "./pages/CadItem/CadItem";
import RealVenda from "./pages/RealVenda/RealVenda";
import Footer from "./components/Footer/Footer";
import Clientes from "./pages/Clientes/Clientes";
import Axios from "axios";

const App = () => {
  const [arraySales, setArraySales] = useState([]);
  const [productList, setProductList] = useState([]);
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/sale/sale").then((response) => {
      setArraySales(response.data);
    });
    Axios.get("http://localhost:5000/item/item").then((response) => {
      setProductList(response.data);
    });
    Axios.get("http://localhost:5000/client/client").then((response) => {
      setClientList(response.data);
    });
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home productList={productList} />}
          ></Route>
          <Route
            exact
            path="/clientes"
            element={
              <Clientes clientList={clientList} setClientList={setClientList} />
            }
          ></Route>
          <Route
            path="/vendasFeitas"
            element={
              <VendasFeitas
                arraySales={arraySales}
                setArraySales={setArraySales}
              />
            }
          ></Route>
          <Route
            path="/cadastrarCliente"
            element={<CadCliente clientList={clientList} />}
          ></Route>
          <Route
            path="/cadastrarItem"
            element={<CadItem productList={productList} />}
          ></Route>
          <Route
            path="/realizarVenda"
            element={<RealVenda arraySales={arraySales} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
