import React, { useState } from 'react'
import s from './UniqueOffers.module.css'

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
     const [currentPage, setCurrentPage] = useState(1);
  
    const renderCards = () => {
      const startIndex = (currentPage - 1) + cardsPerPage;
      const endIndex = startIndex + cardsPerPage;

        console.log('startIndex', startIndex);
        console.log('endIndex', endIndex);
        
      return data.slice(startIndex, endIndex).map((card, index) => (
        <div key={startIndex + index}>
          <img src={images(`./${card.logo}`)} alt="Step Logo" />
          <h3>{card.title}</h3>
        </div>
      ));
    };

    // Функція для перегляду попередньої картки
    const goToPrevCard = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    // Функція для перегляду наступної картки
    const goToNextCard = () => {
      const totalCards = data.length;
      const totalPages = Math.ceil(totalCards / cardsPerPage);

      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    

    console.log(currentPage === data.length);
    
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ <br />
        <span className={s.styledTitle}>для вас</span>
      </h2>
      <div>
        <div>
          {/* кнопки-стрілки для переходу до попередньої і наступної картки */}
          <button onClick={goToPrevCard} disabled={currentPage === 1}>
            &lt; Попередня
          </button>
          <button
            onClick={goToNextCard}
            disabled={currentPage === data.length }
          >
            Наступна &gt;
          </button>
        </div>
        <div className={s.paginatedOffers}>{renderCards()}</div>
      </div>
    </section>
  );
}

export default UniqueOffers