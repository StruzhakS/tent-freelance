import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import s from '../header/Header.module.css'
import css from '../footer/Footer.module.css'

const Navigation = ({  t, footer }) => {

  const location = useLocation();
  
  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <nav className={`${ footer ?  css.navigate: s.navigate }`}>
      <NavLink to={'/'} className={isActive('/') ? s.active : ''}>
        {t('Homepage')}
      </NavLink>
      <NavLink
        to={'/promotions'}
        className={isActive('/promotions') ? s.active : ''}
      >
        {t('Promotions')}
      </NavLink>
      <NavLink
        to={'/video-tips'}
        className={isActive('/video-tips') ? s.active : ''}
      >
        {t('Video tips')}
      </NavLink>
      <NavLink
        to={'/used-tents'}
        className={isActive('/used-tents') ? s.active : ''}
      >
        {t('Used tents')}
      </NavLink>
      <NavLink
        to={'/contacts'}
        className={isActive('/contacts') ? s.active : ''}
      >
        {t('Сontacts')}
      </NavLink>
    </nav>
  );
};

export default Navigation;