import styled from "styled-components";

export const DivPrincipal = styled.div`
  min-height: 81.75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const FormSearch = styled.div`
  padding-top: 2rem;
  max-height: 4rem;
  gap: 1rem;
  width: 82%;
  align-items: center;
  input {
    height: 2rem;
    background-image: url("https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png");
    background-repeat: no-repeat;
    background-size: 1.7rem;
    background-position: 98%;
  }
`;
