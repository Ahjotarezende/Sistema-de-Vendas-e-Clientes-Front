import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

const EditClient = ({
  setOpen,
  open,
  nome,
  pagamento,
  cpf,
  telefone,
  nasc,
  email,
  cidade,
  rua,
  numerocasa,
  id,
}) => {
  const [editName, setEditName] = useState(nome);
  const [editPagamento, setEditPagamento] = useState(pagamento);
  const [editCpf, setEditCpf] = useState(cpf);
  const [editTelefone, setEditTelefone] = useState(telefone);
  const [editNasc, setEditNasc] = useState(nasc);
  const [editEmail, setEditEmail] = useState(email);
  const [editCidade, setEditCidade] = useState(cidade);
  const [editRua, setEditRua] = useState(rua);
  const [editNumeroCasa, setEditNumeroCasa] = useState(numerocasa);

  const handleCloseSalvar = () => {
    Axios.put("http://localhost:3001/editClient", {
      id: id,
      nome: editName,
      pagamento: editPagamento,
      cpf: editCpf,
      telefone: editTelefone,
      nasc: editNasc,
      email: editEmail,
      cidade: editCidade,
      rua: editRua,
      numerocasa: editNumeroCasa,
    });
    setOpen(false);
    document.location.reload();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Cliente - {nome}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={nome}
          autoFocus
          margin="dense"
          id="nomeCliente"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <TextField
          defaultValue={pagamento}
          autoFocus
          margin="dense"
          id="pagamentoCliente"
          label="Tipo de Pagamento"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditPagamento(e.target.value);
          }}
        />
        <TextField
          defaultValue={cpf}
          autoFocus
          margin="dense"
          id="cpfCliente"
          label="CPF"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditCpf(e.target.value);
          }}
        />
        <TextField
          defaultValue={telefone}
          autoFocus
          margin="dense"
          id="telefoneCliente"
          label="Telefone de contato"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditTelefone(e.target.value);
          }}
        />
        <TextField
          defaultValue={nasc}
          autoFocus
          margin="dense"
          id="nascCliente"
          label="Data de nascimento"
          type="date"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditNasc(e.target.value);
          }}
        />
        <TextField
          defaultValue={email}
          autoFocus
          margin="dense"
          id="emailCliente"
          label="Email"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditEmail(e.target.value);
          }}
        />
        <TextField
          defaultValue={cidade}
          autoFocus
          margin="dense"
          id="cidadeCliente"
          label="Cidade"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditCidade(e.target.value);
          }}
        />
        <TextField
          defaultValue={rua}
          autoFocus
          margin="dense"
          id="ruaCliente"
          label="Rua"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditRua(e.target.value);
          }}
        />
        <TextField
          defaultValue={numerocasa}
          autoFocus
          margin="dense"
          id="numeroCasaCliente"
          label="Numero da casa"
          type="number"
          min="0"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditNumeroCasa(e.target.value);
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

export default EditClient;
