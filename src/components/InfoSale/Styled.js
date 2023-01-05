import styled from "styled-components";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

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
  background-color: lightgray;
  div {
    font-family: "Nunito", sans-serif;
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
`;

export const TypographyUI = styled(Typography)`
  color: black;
`;

export const ButtonUI = styled.button`
  width: 6rem;
  height: 3rem;
  font-weight: bold;
  border-radius: 1rem;
  border: none;
  font-family: "Nunito", sans-serif;
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
`;
