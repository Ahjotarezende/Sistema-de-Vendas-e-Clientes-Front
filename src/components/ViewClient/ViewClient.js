import React from "react";
import {
  DivPrincipal,
  DivData,
  DataID,
  FaTrashIcon,
  FaPencilAltIcon,
  DataName,
} from "./Styled";
import EditClient from "../../components/EditClient/EditClient";
import DeletClient from "../DeletClient/DeletClient";

const ViewData = ({
  clientID,
  name,
  pagamento,
  cpf,
  telefone,
  email,
  cidade,
  rua,
  numerocasa,
  firstIndi,
  secondIndi,
  thirdIndi,
}) => {
  const [open, setOpen] = React.useState(false);
  const [openDelet, setOpenDelet] = React.useState(false);

  const editarCliente = () => {
    setOpen(true);
  };

  const deletarCliente = () => {
    setOpenDelet(true);
  };

  return (
    <DivPrincipal>
      <DeletClient
        setOpenDelet={setOpenDelet}
        openDelet={openDelet}
        name={name}
        id={clientID}
      />
      <EditClient
        setOpen={setOpen}
        id={clientID}
        open={open}
        nome={name}
        pagamento={pagamento}
        cpf={cpf}
        telefone={telefone}
        email={email}
        cidade={cidade}
        rua={rua}
        numerocasa={numerocasa}
        firstIndi={firstIndi}
        secondIndi={secondIndi}
        thirdIndi={thirdIndi}
      />
      <DataID>{clientID}</DataID>
      <DivData>
        <DataName>{name}</DataName>
      </DivData>
      <FaTrashIcon
        onClick={() => {
          deletarCliente();
        }}
      />
      <FaPencilAltIcon
        onClick={() => {
          editarCliente();
        }}
      />
    </DivPrincipal>
  );
};

export default ViewData;
