import styled from "styled-components";
import { FaTrash, FaEye } from "react-icons/fa";

export const SaleID = styled.p`
  color: white;
  font-weight: 700;
`;

export const SaleDate = styled.p`
  color: white;
  width: 6rem;
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 2px solid white;
  border-left: 2px solid white;
  padding: 0 10px;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const DivPrincipal = styled.div`
  width: 98%;
  border: 2px solid white;
  height: 2.5rem;
  border-radius: 10px;
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 0 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const SaleName = styled.p`
  width: 100%;
  border-left: 2px solid white;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 0.8em;
`;

export const FaTrashIcon = styled(FaTrash)`
  height: 100%;
  width: 1.3rem;
  color: #aa0000;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const FaEyeIcon = styled(FaEye)`
  height: 100%;
  width: 1.3rem;
  color: white;
  cursor: pointer;
  border-left: 2px solid white;
  padding-left: 10px;
  &:hover {
    color: #4169e1;
  }
`;
