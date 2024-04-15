import React, { useState } from 'react'
import s from './UniqueOffers.module.css'
import arrowRight from '../../images/arrowRight.svg';
import arrowLeft from '../../images/arrowLeft.svg';
const images = require.context('../../images', true);


const data = [
  { title: 'Ремонт тента полуприцепа', logo: 'Ellipse 14.png' },
  { title: 'Ремонт тента зерновоза', logo: 'Ellipse 15.png' },
  { title: 'Ремонт тента легкового прицепа ', logo: 'Ellipse 16.png' },
  { title: 'Ремонт тента газели', logo: 'Ellipse 17.png' },
  { title: 'Ремонт тента-палатки', logo: 'Ellipse 18.png' },
  { title: 'Ремонт верхушки тента', logo: 'Ellipse 19.png' },
  { title: 'Таможенный ремонт по ТИР стандартам ', logo: 'Ellipse 13.png' },
  { title: 'Тентовая фурнитура', logo: 'Ellipse 12.png' },
  { title: 'Тентовый инструмент', logo: 'Ellipse 11.png' },
];
const cardsPerPage = 3;

const UniqueOffers = () => {
  const [startIndex, setStartIndex] = useState(0)

    const renderCards = () => {
      const endIndex = startIndex + cardsPerPage;
       
      return data.slice(startIndex, endIndex).map((card, index) => (
        <div key={startIndex + index}>
          <img src={images(`./${card.logo}`)}width={60} height={60} alt="Step Logo" />
          <h3>{card.title}</h3>
        </div>
      ));
    };

    const goToPrevCard = () => {
      setStartIndex((prev)=>prev-1)
    };

  const goToNextCard = () => {
        setStartIndex(prev => prev + 1);
    };
    
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ <br />
        <span className={s.styledTitle}>для вас</span>
      </h2>
        <div className={s.arrowWraper}>
          <button className={s.arrowBtn} onClick={goToPrevCard} disabled={startIndex === 0}>
            &larr;
          </button>
          <button className={s.arrowBtn}
            onClick={goToNextCard}
            disabled={startIndex === data.length - cardsPerPage}
          >
         
            &rarr;
          </button>
        </div>
        <div className={s.paginatedOffers}>{renderCards()}</div>
     
    </section>
  );
}

export default UniqueOffers