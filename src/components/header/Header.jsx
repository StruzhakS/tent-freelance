import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo-tent.svg';
import burgerMenu from '../../images/burger-menu.svg';
import ScrollToTopButton from 'components/scrollToTopButton/ScrollToTopButton';
import { useTranslation } from 'react-i18next';
import phoneLogo from '../../images/Phonefooter.png';
import i18n from 'i18n';
import ua from '../../images/Ukraine.png';
import es from '../../images/es-flag.svg';
import de from '../../images/de-flag.svg';
import ru from '../../images/Russian Federation.png';

const Header = ({ toggleBurgerMenu }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = path => {
    return location.pathname === path;
  };
  const [selectedLanguage, setSelectedLanguage] = useState('ua');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    changeLanguage(selectedValue);
  };

  return (
    <header className={s.headerContainer}>
      <NavLink className={s.tentLink} to={'/'}>
        <img
          src={logo}
          width={184}
          height={50}
          alt="logo repair tent"
        />
      </NavLink>
      <div className={s.headerNavigate}>
        <nav className={s.navigate}>
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
        <div className={s.languageWrapper}>
          <img
            src={
              selectedLanguage === 'ua'
                ? ua
                : selectedLanguage === 'ru'
                ? ru
                : selectedLanguage === 'es'
                ? es
                : de
            }
            alt="flag ua"
            width={26}
            height={24}
          />
          <select
            value={selectedLanguage}
            onChange={handleSelectChange}
            className={s.languagesSelect}
          >
            <option value="" defaultValue={''}>
              {t(
                selectedLanguage === 'ua'
                  ? 'Мова'
                  : selectedLanguage === 'ru'
                  ? 'Язык'
                  : 'Language'
              )}
            </option>
            <option value="ua"> UA</option>
            <option value="ru">RU</option>
            <option value="es"> ES</option>
            <option value="de"> DE </option>
          </select>{' '}
        </div>
        <a href="tel:+380501589860" className={s.telHeader}>
          <img src={phoneLogo} width={24} height={24} alt="phonetel logo" />
          +380501589860
        </a>
      </div>
      <ScrollToTopButton />
      <button type="button" className={s.menuBtn} onClick={toggleBurgerMenu}>
        <img src={burgerMenu} alt="logo burger menu" />
      </button>
    </header>
  );
};

export default Header;
