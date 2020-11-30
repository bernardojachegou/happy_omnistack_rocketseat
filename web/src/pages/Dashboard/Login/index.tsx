import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import verticalLogo from '../../../images/verticalLogo.svg';
import {
  HeroBg,
  LoginBg,
  LoginContainer,
  LoginInput,
  LoginOptionals,
  LoginWrapper,
  Location,
} from './styles';

export default function LoginPage() {
  const { goBack } = useHistory();
  return (
    <LoginContainer>
      <HeroBg>
        <img src={verticalLogo} alt="Happy logo" />
        <Location>
          <p>Cuiabá</p>
          <p>Mato Grosso</p>
        </Location>
      </HeroBg>
      <LoginBg>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
        <LoginWrapper>
          <h1>Fazer Login</h1>
          <div className="item">
            <label htmlFor="e-mail">Email</label>
            <LoginInput type="email" />
          </div>
          <div className="item">
            <label htmlFor="e-mail">Senha</label>
            <LoginInput type="password" />
            <LoginOptionals>
              <div id="optionals">
                <input type="checkbox" name="checkinfo" />
                <label htmlFor="checkinfo">Lembrar-me</label>
              </div>
              <a href="#">Esqueci minha senha</a>
            </LoginOptionals>
          </div>
          <button>Entrar</button>
        </LoginWrapper>
      </LoginBg>
    </LoginContainer>
  );
}
