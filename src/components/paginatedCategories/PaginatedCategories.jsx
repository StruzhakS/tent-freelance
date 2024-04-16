import React, { useState } from 'react'
import s from './PaginatedCategories.module.css'

const images = require.context('../../images', true);
const cardsPerPage = 4;

const PaginatedCategories = ({ category }) => {
  const [startIndex, setStartIndex] = useState(0);

  const renderCards = () => {
    const endIndex = startIndex + cardsPerPage;

    return category.slice(startIndex, endIndex).map((card, index) => (
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
    setStartIndex(prev => prev - 1);
  };

  const goToNextCard = () => {
    setStartIndex(prev => prev + 1);
  };
  return (
    <>
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
          disabled={startIndex === category.length - cardsPerPage}
        >
          &rarr;
        </button>
      </div>
      <div className={s.paginatedOffers}>{renderCards()}</div>
    </>
  );
};

export default PaginatedCategories