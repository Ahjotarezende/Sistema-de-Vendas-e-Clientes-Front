import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

const DeletSale = ({ setOpenDelet, openDelet, name, id }) => {
  const handleClose = () => {
    setOpenDelet(false);
  };

  const handleCloseDeletar = () => {
    Axios.delete(`http://localhost:5000/sale/sale/${id}`);
    document.location.reload();
    setOpenDelet(false);
  };

  return (
    <Dialog
      open={openDelet}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Deletar este item?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ao clicar em aceitar você estará ciente de que a venda no nome de -
          {name}- não poderá ser recuperado. ESSA É UMA AÇÃO PERMANENTE!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancelar
        </Button>
        <Button
          onClick={() => {
            handleCloseDeletar();
          }}
        >
          Aceitar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletSale;
