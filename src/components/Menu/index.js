import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu(){
  return (
    <nav className="Menu">
      <a href='/'>
        <img className="Logo" src={Logo} alt='MyFlix logo' />
      </a>

      <a className="ButtonLink" href="/">
          Novo Vídeo
      </a>
    </nav>
  );
}

export default Menu; //vrau