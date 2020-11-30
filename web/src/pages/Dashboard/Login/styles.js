import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    outline: none;
    border-radius: 16px;
    border: none;
    background-color: #87689f;
    height: 50px;
    color: white;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
    margin-top: 24px;
  }

  button:hover {
    opacity: 1;
  }
`;

export const HeroBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 680px;
  margin-top: 150px;
  min-width: 70vw;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Location = styled.div`
  transition: all 0.25s linear;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryTextColor};
  text-align: center;
`;

export const LoginBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #c194e3;
  min-width: 30vw;

  @media screen and (max-width: 900px) {
    min-width: 100vw;
  }

  button[type='button'] {
    position: absolute;
    top: 30px;
    margin: 0;
    left: 30px;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    transition: 0.5s;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 60%;

  .item {
    margin-bottom: 16px;
  }

  h1 {
    color: white;
    margin-bottom: 16px;
  }

  label {
    font-size: 16px;
    color: white;
  }

  a {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 16px;
  border: 1px solid #87689f;
  height: 50px;
  padding: 0 4px;
  color: #87689f;
`;

export const LoginOptionals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  #optionals {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type='checkbox'] {
    outline: none;
    margin-right: 8px;
    transform: scale(1.4);
  }
`;
