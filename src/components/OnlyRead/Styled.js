import InputMask from "react-input-mask";
import styled from "styled-components";

export const InputRead = styled.input`
  padding-left: 0.5rem;
  font-size: 1.2rem;
  height: 1.5rem;
  width: 98%;
  background: none;
  border: 2px solid white;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const InputMaskered = styled(InputMask)`
  padding-left: 0.5rem;
  font-size: 1.2rem;
  height: 1.5rem;
  width: 98%;
  background: none;
  border: 2px solid white;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;
