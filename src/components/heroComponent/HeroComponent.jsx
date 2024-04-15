import React from 'react';
import s from './HeroComponent.module.css';
import telLogo from '../../images/Mask group.png'
const HeroComponent = () => {
  return (
    <div className={s.imageWrapper}>
      <div className={s.heroText}>
        <p className={s.subTitle}>на полуприцепы, прицепы, фуры</p>
        <h2 className={s.heroTitle}>
          <span className={s.tentRepair}>Ремонт ТЕНТА </span> <br />
          Днепр
        </h2>
      </div>
      <a className={s.phoneLink} href="tel:+380501589860">
        {' '}
        <img src={telLogo} alt="" />
        +380501589860
      </a>
    </div>
  );
};

export default HeroComponent;
