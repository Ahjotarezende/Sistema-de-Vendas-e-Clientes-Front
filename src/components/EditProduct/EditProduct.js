import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

const EditProduct = ({
  setOpen,
  open,
  nomeProduto,
  precoViagem,
  precoCompra,
  precoVista,
  quant,
  precoPrazo,
  idProduto,
}) => {
  const [editName, setEditName] = useState(nomeProduto);
  const [editQuant, setEditQuant] = useState(quant);
  const [editVista, setEditVista] = useState(precoVista);
  const [editPrazo, setEditPrazo] = useState(precoPrazo);
  const [editViagem, setEditViagem] = useState(precoViagem);
  const [editCompra, setEditCompra] = useState(precoCompra);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSalvar = () => {
    Axios.put("https://loja-geraldo-back.onrender.com/item/item", {
      id: idProduto,
      name: editName,
      quantidade: editQuant,
      vista: editVista,
      prazo: editPrazo,
      viagem: editViagem,
      compra: editCompra,
    });
    setOpen(false);
    alert("Salvando...");
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar - {nomeProduto}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={nomeProduto}
          autoFocus
          margin="dense"
          id="nomeProduto"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <TextField
          defaultValue={quant}
          autoFocus
          margin="dense"
          id="quantProduto"
          label="Quantidade"
          type="number"
          min="0"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditQuant(e.target.value);
          }}
        />
        <TextField
          defaultValue={precoCompra}
          autoFocus
          margin="dense"
          id="precoCompraProduto"
          label="Preço - Compra"
          type="number"
          min="0.00"
          step="0.01"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditCompra(e.target.value);
          }}
        />
        <TextField
          defaultValue={precoVista}
          autoFocus
          margin="dense"
          id="precoProduto"
          label="Preço - A vista"
          type="number"
          min="0.00"
          step="0.01"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditVista(e.target.value);
          }}
        />
        <TextField
          defaultValue={precoPrazo}
          autoFocus
          margin="dense"
          id="precoPrazoProduto"
          label="Preço - A prazo"
          type="number"
          min="0.00"
          step="0.01"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditPrazo(e.target.value);
          }}
        />
        <TextField
          defaultValue={precoViagem}
          autoFocus
          margin="dense"
          id="precoViagemProduto"
          label="Preço - Viagem"
          type="number"
          min="0.00"
          step="0.01"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditViagem(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleCloseSalvar}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProduct;
