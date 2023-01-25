import styled from "styled-components";

export const InputTag = styled.input`
  padding-left: 0.5rem;
  font-size: 1.2rem;
  height: 1.5rem;
  width: 98%;
  background: none;
  border: 2px outset #4169e1;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  &::placeholder {
    color: white;
  }
`;
