import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo MyFlix" />
      </a>
      <p>
       Densenvolvido por
        {' '}
        <a href="/">
         Arthur Arruda
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
