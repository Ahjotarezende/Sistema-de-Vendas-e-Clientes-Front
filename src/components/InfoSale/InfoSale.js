import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Bag from "../../assets/Bag - PNG.png";
import Dialog from "@mui/material/Dialog";
import GerarPDF from "../GerarPDF/GerarPDF";
import GerarPDF2 from "../GerarPDF/GerarPDF2";
import GerarPDF3 from "../GerarPDF/GerarPDF3";

import Axios from "axios";
import {
  ListUI,
  TypographyUI,
  ListItemTextValor,
  ToolbarUI,
  CloseIconUI,
  Infos,
  ButtonUI,
} from "./Styled";
import { useState } from "react";
import { useEffect } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const definePreco = (venda) => {
  let valor = 0;
  for (let index = 0; index < venda.items.length; index++) {
    valor += venda.items[index].valor * venda.items[index].quant;
  }
  return valor.toFixed(2);
};

export default function FullScreenDialog({
  open,
  setOpen,
  id,
  name,
  dateSale,
  formaPagamento,
  rota,
  clientList,
}) {
  const [venda, setVenda] = useState({
    items: [
      {
        name: "",
        quant: 0,
        valor: 0,
      },
    ],
  });
  const [client, setClient] = useState();
  const [viewPromissoria, setViewPromissoria] = useState(false);

  useEffect(() => {
    Axios.get(`https://loja-geraldo-back.onrender.com/sale/sale/${id}`).then(
      (response) => {
        setVenda(response.data);
      }
    );
    /*eslint-disable*/
    clientList.filter((client) => {
      if (client.name === name) setClient(client);
    });
  }, [id, name]);

  const handleClose = () => {
    setOpen(false);
    document.location.reload();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <ToolbarUI>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIconUI />
        </IconButton>
        <TypographyUI sx={{ ml: 0, flex: 1 }} variant="h6" component="div">
          <img src={Bag} alt="" />
          Geraldo Henrique Vendas {dateSale}
        </TypographyUI>
        <label htmlFor="notaPromissoria">Nota Promissoria</label>
        <input
          id="notaPromissoria"
          type="checkbox"
          onChange={(e) => setViewPromissoria(e.target.checked)}
        />
        <ButtonUI
          onClick={() =>
            viewPromissoria
              ? (GerarPDF(name, dateSale, formaPagamento, venda, rota),
                GerarPDF2(name, dateSale, formaPagamento, venda, rota, client))
              : (GerarPDF(name, dateSale, formaPagamento, venda, rota),
                GerarPDF3(name, dateSale, formaPagamento, venda, rota, client))
          }
        >
          Imprimir
        </ButtonUI>
      </ToolbarUI>
      <ListUI>
        <Infos>
          <p>Nome</p>
          <p>Quantidade</p>
          <p>Pre??o Unit??rio</p>
          <p>Pre??o Total</p>
        </Infos>
        {venda.items
          .sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          })
          .map((item, i) => (
            <Infos key={i}>
              <p className="item">{item.name}</p>
              <p className="item">{item.quant}</p>
              <p className="item">{Number(item.valor).toFixed(2)}</p>
              <p className="item">
                {Number(item.valor * item.quant).toFixed(2)}
              </p>
            </Infos>
          ))}
        <ListItemTextValor
          primary={`Total: ${definePreco(venda)}`}
          secondary={formaPagamento}
        />
      </ListUI>
    </Dialog>
  );
}
