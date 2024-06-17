import React, { useRef } from 'react';
import s from './BurgerMenu.module.css'; // Файл стилів
import LanguagesButtons from '../languagesButton/LanguagesButton';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/navigate/Navigation';

const BurgerMenu = ({ toggleBurgerMenu, isOpen }) => {
  const menuRef = useRef(null);
  const { t } = useTranslation();
  return (
    <div className={`${s.burgerMenu} ${isOpen ? s.open : ''}`} ref={menuRef}>
      <button className={s.burgerIcon} onClick={toggleBurgerMenu}>
        &#10006;
      </button>
      <div className={s.menuItems}>
        <Navigation t={t} toggleBurgerMenu={toggleBurgerMenu} />
        <LanguagesButtons />
      </div>
    </div>
  );
};

export default BurgerMenu;
