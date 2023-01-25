import styled from "styled-components";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export const DataID = styled.p`
  width: 4%;
  height: 100%;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid white;
  @media (max-width: 600px) {
    width: 7%;
  }
`;

export const DivPrincipal = styled.div`
  width: 80%;
  border: 2px solid white;
  height: 2.5rem;
  border-radius: 10px;
  align-items: center;
  display: flex;
  padding: 0 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const DataName = styled.p`
  display: flex;
  width: 70%;
  border-right: 2px solid white;
  color: white;
  margin-left: 0.3rem;
  height: 100%;
  align-items: center;
  @media (max-width: 600px) {
    width: 40%;
  }
`;

export const DataPrice = styled.div`
  border-right: 2px solid white;
  color: white;
  font-weight: 700;
  width: 10%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media (max-width: 600px) {
    width: 15%;
  }
`;

export const DataQuant = styled.div`
  width: 6%;
  border-right: 2px solid white;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 600px) {
    width: 10%;
  }
`;

export const DataTerm = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 700;
  width: 10%;
  height: 100%;
  align-items: center;
  border-right: 2px solid white;
  @media (max-width: 600px) {
    width: 15%;
  }
`;

export const FaTrashIcon = styled(FaTrash)`
  height: 100%;
  border-right: 2px solid white;
  padding-right: 1%;
  width: 1rem;
  color: #aa0000;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: red;
  }
  @media (max-width: 600px) {
    margin: 0 7px;
  }
`;

export const FaPencilAltIcon = styled(FaPencilAlt)`
  height: 100%;
  width: 1rem;
  margin-left: 1%;
  color: white;
  cursor: pointer;
  &:hover {
    color: #4169e1;
  }
`;
