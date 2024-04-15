import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-tent.svg';
import burgerMenu from '../../images/burger-menu.svg';

const Header = ({ toggleBurgerMenu }) => {
  return (
    <header className={s.headerContainer}>
      <NavLink to={'/'}>
        <img src={logo} width={184} height={50} alt="logo repair tent" />
      </NavLink>
      <button type="button" className={s.menuBtn} onClick={toggleBurgerMenu}>
        <img src={burgerMenu} alt="logo burger menu" />
      </button>
    </header>
  );
};

export default Header;
