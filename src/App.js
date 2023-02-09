import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import VendasFeitas from "./pages/VendasFeitas/VendasFeitas";
import CadCliente from "./pages/CadCliente/CadCliente";
import CadItem from "./pages/CadItem/CadItem";
import RealVenda from "./pages/RealVenda/RealVenda";
import Footer from "./components/Footer/Footer";
import Clientes from "./pages/Clientes/Clientes";
import Axios from "axios";
import Login from "./pages/Login/Login";

const App = () => {
  const [arraySales, setArraySales] = useState([]);
  const [productList, setProductList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [open, setOpen] = useState("notView");
  const [openDiv, setOpenDiv] = useState("");
  const [login, setLogin] = useState("login");
  const [openNavegation, setOpenNavegation] = useState("");

  useEffect(() => {
    Axios.get("https://loja-geraldo-back.onrender.com/sale/sale").then(
      (response) => {
        setArraySales(response.data);
      }
    );
    Axios.get("https://loja-geraldo-back.onrender.com/item/item").then(
      (response) => {
        setProductList(response.data);
      }
    );
    Axios.get("https://loja-geraldo-back.onrender.com/client/client").then(
      (response) => {
        setClientList(response.data);
      }
    );
  }, []);

  const PrivateRoute = ({ children, redirectTo }) => {
    const auth = localStorage.getItem("token") !== null;
    return auth ? children : <Navigate to={redirectTo} />;
  };

  return (
    <>
      <Router>
        <NavBar
          login={login}
          open={open}
          setOpen={setOpen}
          openDiv={openDiv}
          setOpenDiv={setOpenDiv}
          openNavegation={openNavegation}
          setOpenNavegation={setOpenNavegation}
        />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute redirectTo="/">
                <Home productList={productList} setLogin={setLogin} />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/clientes"
            element={
              <PrivateRoute redirectTo="/">
                <Clientes
                  clientList={clientList}
                  setClientList={setClientList}
                  setLogin={setLogin}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/vendasFeitas"
            element={
              <PrivateRoute redirectTo="/">
                <VendasFeitas
                  clientList={clientList}
                  arraySales={arraySales}
                  setArraySales={setArraySales}
                  setLogin={setLogin}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/cadastrarCliente"
            element={
              <PrivateRoute redirectTo="/">
                <CadCliente clientList={clientList} setLogin={setLogin} />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/cadastrarItem"
            element={
              <PrivateRoute redirectTo="/">
                <CadItem productList={productList} setLogin={setLogin} />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/realizarVenda"
            element={
              <PrivateRoute redirectTo="/">
                <RealVenda openDiv={openDiv} setLogin={setLogin} />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
        <Footer login={login} />
      </Router>
    </>
  );
};

export default App;
