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
  cnpj,
  cpf,
  telefone,
  email,
  cidade,
  rua,
  numerocasa,
  id,
  firstIndi,
  secondIndi,
  thirdIndi,
}) => {
  const [editName, setEditName] = useState(nome);
  const [editCnpj, setEditCnpj] = useState(cnpj);
  const [editCpf, setEditCpf] = useState(cpf);
  const [editTelefone, setEditTelefone] = useState(telefone);
  const [editEmail, setEditEmail] = useState(email);
  const [editCidade, setEditCidade] = useState(cidade);
  const [editRua, setEditRua] = useState(rua);
  const [editNumeroCasa, setEditNumeroCasa] = useState(numerocasa);
  const [editFirstIndi, setEditFirstIndi] = useState(firstIndi);
  const [editSecondIndi, setEditSecondIndi] = useState(secondIndi);
  const [editThirdIndi, setEditThirdIndi] = useState(thirdIndi);

  const handleCloseSalvar = () => {
    Axios.put("https://loja-geraldo-back.onrender.com/client/client", {
      id: id,
      name: editName,
      cnpj: editCnpj,
      cpf: editCpf,
      telefone: editTelefone,
      email: editEmail,
      cidade: editCidade,
      rua: editRua,
      numero: editNumeroCasa,
      firstIndi: editFirstIndi,
      secondIndi: editSecondIndi,
      thirdIndi: editThirdIndi,
    }).then((res) => {
      alert("Salvo com sucesso");
      document.location.reload();
    });
    setOpen(false);
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
          defaultValue={cnpj}
          autoFocus
          margin="dense"
          id="cnpjCliente"
          label="Cnpj"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditCnpj(e.target.value);
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
        <TextField
          defaultValue={firstIndi}
          autoFocus
          margin="dense"
          id="firstIndi"
          label="Primeira indicação"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditFirstIndi(e.target.value);
          }}
        />
        <TextField
          defaultValue={secondIndi}
          autoFocus
          margin="dense"
          id="secondIndi"
          label="Segunda Indicação"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditSecondIndi(e.target.value);
          }}
        />
        <TextField
          defaultValue={thirdIndi}
          autoFocus
          margin="dense"
          id="thirdIndi"
          label="Terceira indicação"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEditThirdIndi(e.target.value);
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
