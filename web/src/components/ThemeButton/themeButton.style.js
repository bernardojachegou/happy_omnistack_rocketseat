import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  top: 20px;
  right: 20px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: absolute;
  width: 80px;
  height: 50px;
  outline: none;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.5s linear;
    
    // Sun icon
    &:nth-child(1) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // Moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
