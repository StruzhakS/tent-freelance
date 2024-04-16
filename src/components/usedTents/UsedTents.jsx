import React from 'react'
import s from './UsedTents.module.css'
import { usedTents } from 'constants/usedTents'
import usedTent from '../../images/usedTent.png'

const UsedTents = () => {
  return (
    <ul className={s.usedTentList}>
      {usedTents.slice(0, 6).map(el => (
        <li className={s.usedTentItem} key={el.title}>
              <img className={s.usedTentImage} src={el.img ? el.img : usedTent} alt={el.title} />
              <p className={s.tentTitle}>{el.title}</p>
              <p className={s.tentPrice}>{el.price} грн</p>
              <p className={s.tentLocation}> {el.location}</p>
              <p className={s.date}> {el.createdAt }</p>
        </li>
      ))}
    </ul>
  );
}

export default UsedTents