import React, { useState } from 'react'
import s from './UniqueCategories.module.css'
import { uniqueCategories } from 'constants/uniqueCategories';

const images = require.context('../../images', true);
const cardsPerPage = 3;

const UniqueCategories = () => {
  const [startIndex, setStartIndex] = useState(0)

    const renderCards = () => {
      const endIndex = startIndex + cardsPerPage;
       
      return uniqueCategories.slice(startIndex, endIndex).map((card, index) => (
        <div key={startIndex + index}>
          <img
            src={images(`./${card.logo}`)}
            width={60}
            height={60}
            alt="Step Logo"
          />
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
        <button
          className={s.arrowBtn}
          onClick={goToPrevCard}
          disabled={startIndex === 0}
        >
          &larr;
        </button>
        <button
          className={s.arrowBtn}
          onClick={goToNextCard}
          disabled={startIndex === uniqueCategories.length - cardsPerPage}
        >
          &rarr;
        </button>
      </div>
      <div className={s.paginatedOffers}>{renderCards()}</div>
    </section>
  );
}

export default UniqueCategories;