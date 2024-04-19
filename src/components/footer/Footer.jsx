import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';
import logo from '../../images/logo-tent.svg';
import pointFooter from '../../images/pointerFooter.png';
import phoneFooter from '../../images/Phonefooter.png';
import instagramLogo from '../../images/instagramLogo.png';
import { isMobile } from 'constants/useMediaQueries';
import Navigation from 'components/navigate/Navigation';
import { useTranslation } from 'react-i18next';
import email from '../../images/email.png';
import facebook from '../../images/facebook.png';
import viber from '../../images/viber.png';
import telegram from '../../images/telegram-48.png'

const Footer = () => {
  const mobileScreen = isMobile();
  const { t } = useTranslation();
  return mobileScreen ? (
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
          <a
            className={s.instagramLink}
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="logo of instagram" />
          </a>
        </div>
      </div>
    </footer>
  ) : (
    <footer className={s.footerSection}>
      <div className={s.logoWrapper}>
        <NavLink to={'/'}>
          <img
            className={s.footerLogo}
            src={logo}
            width={265}
            height={73}
            alt="logo repair tent"
          />
        </NavLink>
        <p className={s.subtitle}>
          Доверьте свои тенты профессионалам ремонта! Мы гарантируем высокое
          качество работы и безупречный результат.
        </p>
      </div>

      <div className={s.footerContactWrapper}>
        <p className={s.footerAdress}>
          <img src={pointFooter} alt="adress" /> Центральная 76, Днепропетровск
          44635
        </p>
        <a className={s.footerTel} href="tel:+380501589860">
          <img src={phoneFooter} width={40} height={40} alt="tell " />{' '}
          +380501589860
        </a>

        <a className={s.emailLink} href="mailto:remonttent.dn@gmail.com">
          <img src={email} width={40} height={40} alt="email logo" />{' '}
          remonttent.dn@gmail.com
        </a>
        <div className={s.socialLinks}>
          <a
            className={s.instagramLink}
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramLogo}
              width={40}
              height={40}
              alt="logo of instagram"
            />
          </a>
          <a
            className={s.instagramLink}
            href="https://www.viber.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={viber} width={40} height={40} alt="logo of viber" />
          </a>

          <a
            className={s.instagramLink}
            href="https://www.telegram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={telegram}
              width={40}
              height={40}
              alt="logo of telegram"
            />
          </a>

          <a
            className={s.instagramLink}
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook}
              width={40}
              height={40}
              alt="logo of facebook"
            />
          </a>
        </div>
      </div>

      <Navigation t={t} footer={true} />
    </footer>
  );
};

export default Footer;
