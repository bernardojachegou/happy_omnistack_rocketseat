import React from 'react';
import verticalLogo from '../../../images/verticalLogo.svg';
import {
  HeroBg,
  LoginBg,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginOptionals,
  LoginWrapper,
} from './styles';

function LoginPage() {
  return (
    <LoginContainer>
      <HeroBg>
        <img src={verticalLogo} alt="Happy logo" />
        <h1>Happy</h1>
        <p>Cuiabá</p>
        <p>Mato Grosso</p>
      </HeroBg>
      <LoginBg>
        <LoginWrapper>
          <h1>Fazer Login</h1>
          <p>E-mail</p>
          <LoginInput />
          <p>Senha</p>
          <LoginInput />
          <LoginOptionals>
            <input type="checkbox" name="checkinfo" />
            <label htmlFor="checkinfo">Lembrar-me</label>
            <p>Esqueci minha senha</p>
          </LoginOptionals>
          <LoginButton />
        </LoginWrapper>
      </LoginBg>
    </LoginContainer>
  );
}

export default LoginPage;
