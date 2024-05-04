import React, { useRef } from 'react';
import s from './UsedTents.module.css';
// import { usedTents } from 'constants/usedTents';
import usedTent from '../../images/usedTent.png';
import { isMobile } from 'constants/useMediaQueries';
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function TentsByUser({
  currentItems,
  handleClick,
  isAccessToken,
  sectionRef,
}) {
  const { t } = useTranslation();
  return (
    <>
      <ul className={s.usedTentList} ref={sectionRef}>
        {currentItems.map((el, i) => (
          <li
            className={s.usedTentItem}
            key={el.title + i}
            onClick={handleClick}
          >
            <img
              className={s.usedTentImage}
              src={el.img ? el.img : usedTent}
              alt={el.title}
            />
            <p className={s.tentTitle}>{el.title}</p>
            <p className={s.tentPrice}>{el.price} грн</p>
            <p className={s.tentLocation}> {el.location}</p>
            <p className={s.date}> {el.createdAt}</p>
          </li>
        ))}
      </ul>
      <div>
        <NavLink className={`${s.link} ${s.addOgo}`} to={'add-announcement'}>
          {t('Add announcement')}
        </NavLink>
        {!isAccessToken && (
          <NavLink className={`${s.link} ${s.loginLink}`} to={'login'}>
            {t('Enter')}/ {t('Register')}
          </NavLink>
        )}
      </div>
    </>
  );
}

const UsedTents = ({ usedTents }) => {
  const mobileScreen = isMobile();
  const visibleOffers = mobileScreen ? usedTents.slice(0, 6) : usedTents;
  const navigate = useNavigate();

  const handleClick = e => {
    navigate('used-tents');
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
    
  };

  const sectionRef = useRef(null);

  const handleSectionFocus = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return mobileScreen ? (
    <TentsByUser currentItems={visibleOffers} handleClick={handleClick} />
  ) : (
    <PaginatedUniqueOffers
      itemsPerPage={8}
      items={usedTents}
      Items={TentsByUser}
      handleClick={handleClick}
      sectionRef={sectionRef}
      handleSectionFocus={handleSectionFocus}
    />
  );
};

export default UsedTents;
