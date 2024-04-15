import React, { useRef } from 'react';
import s from './BurgerMenu.module.css'; // Файл стилів
import LanguagesButtons from '../languagesButton/LanguagesButton';
import { useTranslation } from 'react-i18next';

const BurgerMenu = ({ toggleBurgerMenu, isOpen }) => {
  const menuRef = useRef(null);
  const { t } = useTranslation();
  return (
    <div className={`${s.burgerMenu} ${isOpen ? s.open : ''}`} ref={menuRef}>
      <button className={s.burgerIcon} onClick={toggleBurgerMenu}>
        x
      </button>
      <div className={s.menuItems}>
        <div className={s.menuNavigate}>
          <p>{t('Homepage')}</p>
          <p>{t('Promotions')}</p>
          <p>{t('Video tips')}</p>
          <p>{t('Used tents')}</p>
          <p>{t('Сontacts')}</p>
        </div>
        <LanguagesButtons />
      </div>
    </div>
  );
};

export default BurgerMenu;
