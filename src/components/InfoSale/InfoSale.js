import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import GerarPDF from "../GerarPDF/GerarPDF";

import Axios from "axios";
import {
  ListUI,
  TypographyUI,
  ListItemTextUI,
  ListItemTextValor,
  ToolbarUI,
  ButtonUI,
} from "./Styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const definePreco = (vendaList) => {
  let valor = 0;
  for (let index = 0; index < vendaList.length; index++) {
    if (vendaList[index].pagamento.toLowerCase().includes("vista"))
      valor += vendaList[index].precovista * vendaList[index].quantidade;
    else if (vendaList[index].pagamento.toLowerCase().includes("prazo"))
      valor += vendaList[index].precoprazo * vendaList[index].quantidade;
    else valor += vendaList[index].precocheque * vendaList[index].quantidade;
  }
  return valor.toFixed(2);
};

export default function FullScreenDialog({
  open,
  setOpen,
  id,
  name,
  dateSale,
  cpf,
  formaPagamento,
}) {
  const [vendaList, setVendaList] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`http://localhost:3001/getSale/${id}`).then((response) => {
      setVendaList(response.data);
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
      <AppBar sx={{ position: "relative" }}>
        <ToolbarUI>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <TypographyUI sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {name} - {dateSale}
          </TypographyUI>
          <ButtonUI
            onClick={() =>
              GerarPDF(name, dateSale, cpf, formaPagamento, vendaList)
            }
          >
            Imprimir
          </ButtonUI>
        </ToolbarUI>
      </AppBar>
      <ListUI>
        {vendaList.map((venda, i) => (
          <div key={"item" + i}>
            <ListItemTextUI
              primary={venda.nome}
              secondary={`Quantidade: ${venda.quantidade} - Preço unitario: ${
                venda.pagamento.toLowerCase().includes("vista")
                  ? venda.precovista.toFixed(2)
                  : venda.pagamento.toLowerCase().includes("prazo")
                  ? venda.precoprazo.toFixed(2)
                  : venda.precocheque.toFixed(2)
              } - Preço total: ${
                venda.pagamento.toLowerCase().includes("vista")
                  ? (venda.precovista * venda.quantidade).toFixed(2)
                  : venda.pagamento.toLowerCase().includes("prazo")
                  ? (venda.precoprazo * venda.quantidade).toFixed(2)
                  : (venda.precocheque * venda.quantidade).toFixed(2)
              }`}
            />
            <Divider />
          </div>
        ))}
        <ListItemTextValor
          primary={`Total: ${definePreco(vendaList)}`}
          secondary={formaPagamento}
        />
      </ListUI>
    </Dialog>
  );
}
