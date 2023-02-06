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
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const DataName = styled.p`
  width: 100%;
  color: white;
  font-size: 0.8em;
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
  &:hover {
    color: #ff0000;
  }
  cursor: pointer;
`;

export const FaPencilAltIcon = styled(FaPencilAlt)`
  height: 100%;
  color: white;
  &:hover {
    color: #4169e1;
  }
  cursor: pointer;
`;
