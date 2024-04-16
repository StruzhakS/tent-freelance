import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';
import logo from '../../images/logo-tent.svg';
import pointFooter from '../../images/pointerFooter.png';
import phoneFooter from '../../images/Phonefooter.png';
import instagramLogo from '../../images/instagramLogo.png';

const Footer = () => {
  return (
    <footer className={s.footerSection}>
      <NavLink to={'/'}>
        <img
          className={s.footerLogo}
          src={logo}
          width={265}
          height={73}
          alt="logo repair tent"
        />
      </NavLink>
      <div className={s.footerContactWrapper}>
        <p className={s.footerAdress}>
          <img src={pointFooter} alt="adress" /> Центральная 76, Днепропетровск
          44635
        </p>
        <div className={s.contactWrapper}>
          <a className={s.footerTel} href="tel:+380501589860">
            <img src={phoneFooter} alt="tell " />
            +380501589860
          </a>
          <a  className={s.instagramLink} href="https://www.instagram.com" target="_blank" rel='noreferrer'>
            <img src={instagramLogo} alt="logo of instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
