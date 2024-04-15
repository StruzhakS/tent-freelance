import React, { useState } from 'react'
import s from './HowWeWorkCard.module.css'
import arrowRight from '../../images/ArrowRight.png'

const images = require.context('../../images', true);


const Card = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

    const { title, subscription, logo } = data;
    console.log(logo);
    const imagePath = images(`./${logo}`);
  return (
    <div className={s.card}>
      <div className={s.titleWrapper}>
        <img src={imagePath} alt="Step Logo" />
        <h2 className={s.title}>{title}</h2>
      </div>
      <p className={s.subTitle}>
        {isExpanded ? subscription : `${subscription.slice(0, 98)}...`}
      </p>
      <button onClick={toggleExpansion} className={s.readMoreBtn}>
        {isExpanded ? 'Сховати' : 'Читати далі'}
        {!isExpanded && <img src={arrowRight} alt="read more" />}
      </button>
    </div>
  );
};

export default Card;