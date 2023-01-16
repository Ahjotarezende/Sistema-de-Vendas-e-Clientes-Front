import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Bag from "../../assets/Bag - PNG.png";
import Dialog from "@mui/material/Dialog";
import GerarPDF from "../GerarPDF/GerarPDF";
import GerarPDF2 from "../GerarPDF/GerarPDF2";

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
}) {
  const [venda, setVenda] = React.useState({
    items: [
      {
        name: "",
        quant: 0,
        valor: 0,
      },
    ],
  });

  React.useEffect(() => {
    Axios.get(`https://loja-geraldo-back.onrender.com/sale/sale/${id}`).then(
      (response) => {
        setVenda(response.data);
      }
    );
  }, [id]);

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
        <TypographyUI sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          <img src={Bag} alt="" />
          Geraldo Henrique Vendas {dateSale}
        </TypographyUI>
        <ButtonUI
          onClick={() => {
            GerarPDF(name, dateSale, formaPagamento, venda);
            GerarPDF2(name, dateSale, formaPagamento, venda);
          }}
        >
          Imprimir
        </ButtonUI>
      </ToolbarUI>
      <ListUI>
        <Infos>
          <p>Nome</p>
          <p>Quantidade</p>
          <p>Preço Unitário</p>
          <p>Preço Total</p>
        </Infos>
        {venda.items.map((item, i) => (
          <Infos key={i}>
            <p className="item">{item.name}</p>
            <p className="item">{item.quant}</p>
            <p className="item">{Number(item.valor).toFixed(2)}</p>
            <p className="item">{Number(item.valor * item.quant).toFixed(2)}</p>
            {/* <ListItemTextUI
              primary={item.name}
              secondary={`Quantidade: ${item.quant} - Preço unitario: ${Number(
                item.valor
              ).toFixed(2)} - Preço total: ${(item.valor * item.quant).toFixed(
                2
              )}`}
            /> */}
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
