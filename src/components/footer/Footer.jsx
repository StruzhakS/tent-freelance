import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-tent.svg'

const Footer = () => {
  return (
    <footer>
      <NavLink to={'/'}>
        <img src={logo} width={184} height={50} alt="logo repair tent" />
      </NavLink>
    </footer>
  );
}

export default Footer