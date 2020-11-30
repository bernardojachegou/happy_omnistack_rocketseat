import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #87689f;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  outline: none;
  z-index: 10;

  &:hover {
    border: 2px solid white;
  }
`;
