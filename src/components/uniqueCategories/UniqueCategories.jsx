import React from 'react'
import s from './UniqueCategories.module.css'
import { uniqueCategories } from 'constants/uniqueCategories';
import PaginatedCategories from 'components/paginatedCategories/PaginatedCategories';



const UniqueCategories = () => {
    
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ <br />
        <span className={s.styledTitle}>для вас</span>
      </h2>
      <PaginatedCategories category={uniqueCategories} />
    </section>
  );
}

export default UniqueCategories;