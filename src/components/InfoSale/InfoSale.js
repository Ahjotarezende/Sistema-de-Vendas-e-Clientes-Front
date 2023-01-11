import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
// import GerarPDF from "../GerarPDF/GerarPDF";

import Axios from "axios";
import {
  ListUI,
  TypographyUI,
  ListItemTextUI,
  ListItemTextValor,
  ToolbarUI,
  CloseIconUI,
  // ButtonUI,
  DivASS,
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
    Axios.get(`http://localhost:5000/sale/sale/${id}`).then((response) => {
      setVenda(response.data);
    });
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
      <div>
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
            {name} - {dateSale} - Rota: {venda.rota ? venda.rota : ""}
          </TypographyUI>
          {/* <ButtonUI
            onClick={() =>
              GerarPDF(name, dateSale, cpf, formaPagamento, venda)
            }
          >
            Imprimir
          </ButtonUI> */}
        </ToolbarUI>
      </div>
      <ListUI>
        {venda.items.map((item, i) => (
          <div key={"item" + i}>
            <ListItemTextUI
              primary={item.name}
              secondary={`Quantidade: ${
                item.quant
              } - Preço unitario: ${item.valor.toFixed(2)} - Preço total: ${(
                item.valor * item.quant
              ).toFixed(2)}`}
            />
            <Divider />
          </div>
        ))}
        <ListItemTextValor
          primary={`Total: ${definePreco(venda)}`}
          secondary={formaPagamento}
        />
      </ListUI>
      <DivASS>Assinado no nome de {name}</DivASS>
    </Dialog>
  );
}
