import styled from "styled-components";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export const DataID = styled.p`
  color: white;
  font-weight: 700;
`;

export const DivPrincipal = styled.div`
  width: 80%;
  border: 2px solid white;
  height: 2.5rem;
  border-radius: 10px;
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;

export const DataName = styled.p`
  width: 100%;
  border-right: 2px solid white;
  color: white;
`;

export const DataPrice = styled.div`
  border-right: 2px solid white;
  padding: 0 10px;
  color: white;
  font-weight: 700;
  width: 4rem;
  display: flex;
  justify-content: center;
`;

export const DataQuant = styled.div`
  width: 2rem;
  border-right: 2px solid white;
  padding: 0 10px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

export const DataTerm = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  color: white;
  font-weight: 700;
  width: 4rem;
`;

export const DivData = styled.div`
  border-left: 2px solid white;
  border-right: 2px solid white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const FaTrashIcon = styled(FaTrash)`
  height: 100%;
  border-right: 2px solid white;
  padding-right: 10px;
  color: #aa0000;
  cursor: pointer;
`;

export const FaPencilAltIcon = styled(FaPencilAlt)`
  height: 100%;
  cursor: pointer;
`;
