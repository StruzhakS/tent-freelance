import React from 'react';
import s from './UsedTents.module.css';
import { usedTents } from 'constants/usedTents';
import usedTent from '../../images/usedTent.png';
import { isMobile } from 'constants/useMediaQueries';
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function TentsByUser({ currentItems, handleClick, t, isAccessToken }) {
  return (
    <>
      <ul className={s.usedTentList}>
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

const UsedTents = () => {
  const mobileScreen = isMobile();
  const visibleOffers = mobileScreen ? usedTents.slice(0, 6) : usedTents;
  const navigate = useNavigate();

  const handleClick = e => {
    navigate('used-tents');
  };

  return mobileScreen ? (
    <TentsByUser currentItems={visibleOffers} handleClick={handleClick} />
  ) : (
    <PaginatedUniqueOffers
      itemsPerPage={8}
      items={usedTents}
      Items={TentsByUser}
      handleClick={handleClick}
    />
  );
};

export default UsedTents;
