import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import VendasFeitas from './pages/VendasFeitas/VendasFeitas'
import CadCliente from './pages/CadCliente/CadCliente'
import CadItem from './pages/CadItem/CadItem'
import RealVenda from './pages/RealVenda/RealVenda'
import Footer from './components/Footer/Footer';
import Clientes from './pages/Clientes/Clientes';

const App = () => {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}>
                </Route>
                <Route exact path="/clientes" element={<Clientes/>}>
                </Route>
                <Route path="/vendasFeitas" element={<VendasFeitas/>}>
                </Route>
                <Route path="/cadastrarCliente" element={<CadCliente/>}>
                </Route>
                <Route path="/cadastrarItem" element={<CadItem/>}>
                </Route>
                <Route path="/realizarVenda" element={<RealVenda/>}>
                </Route>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App