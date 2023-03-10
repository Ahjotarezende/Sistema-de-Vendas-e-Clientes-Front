import styled from "styled-components";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";

export const CloseIconUI = styled(CloseIcon)`
  color: white;
`;

export const ListItemTextUI = styled(ListItemText)`
  margin-left: 10px;
  span {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
  }
  p {
    font-family: "Nunito", sans-serif;
  }
`;

export const ToolbarUI = styled(Toolbar)`
  background-image: linear-gradient(to top, #d3d3d3, #a1a1a1);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  div {
    font-family: "Nunito", sans-serif;
  }
  input {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ListItemTextValor = styled(ListItemText)`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Nunito", sans-serif;
  }
  span {
    font-weight: 700;
    font-family: "Nunito", sans-serif;
  }
`;

export const ListUI = styled(List)`
  height: 100%;
  page-break-before: always;
`;

export const Infos = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 2px solid black;
  padding: 0.5rem 0.2rem;
  &:nth-child(even) {
    background-color: lightgray;
  }
  p {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TypographyUI = styled(Typography)`
  color: black;
  display: flex;
  align-items: center;
  img {
    width: 4rem;
  }
  @media (max-width: 600px) {
    img {
      width: 3rem;
    }
    font-size: 0.55rem !important;
  }
`;

export const DivASS = styled.div`
  height: 5rem;
  position: relative;
  align-self: center;
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid black;
  width: 27rem;
`;

export const ButtonUI = styled.button`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  width: 6rem;
  height: 3rem;
  font-weight: bold;
  border-radius: 1rem;
  border: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-image: url("https://img.icons8.com/stickers/100/null/export-pdf.png");
  background-repeat: no-repeat;
  background-size: 22px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-position: 4rem;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 600px) {
    height: 2rem;
    width: 4.2rem;
    border-radius: 0.3rem;
    background-size: 15px;
    font-size: 0.7rem;
    background-position: 3rem;
    padding: 5px;
  }
`;
