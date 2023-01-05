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
  width: 100%;
  border: 2px solid white;
  height: 2.5rem;
  border-radius: 10px;
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 0 10px;
  &:hover {
    p {
      color: black;
    }
    p,
    svg {
      border-color: black;
    }
    background-color: light;
    border-color: black;
  }
`;

export const SaleName = styled.p`
  width: 100%;
  border-left: 2px solid white;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const FaTrashIcon = styled(FaTrash)`
  height: 100%;
  width: 1.3rem;
  color: #aa0000;
  cursor: pointer;
`;

export const FaEyeIcon = styled(FaEye)`
  height: 100%;
  width: 1.3rem;
  color: darkblue;
  cursor: pointer;
  border-left: 2px solid white;
  padding-left: 10px;
`;
