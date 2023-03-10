import styled from "styled-components";

export const Container = styled.ul`
  height: 1.8rem;
  width: 100%;
  display: flex;
  gap: 0.3rem;
  color: white;
  justify-content: center;
  margin-bottom: 2px;
`;

export const ListaPage = styled.li`
  cursor: pointer;
  padding: 5px;
  border: 2px solid white;
  &:hover {
    background-color: lightblue;
  }
  &.pageActive${(props) => props.page} {
    border: none;
    border-bottom: 2px solid #4169e1;
    color: #4169e1;
    font-weight: 700;
  }
`;
